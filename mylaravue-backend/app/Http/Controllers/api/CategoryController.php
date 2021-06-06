<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\category\StoreCategoryRequest;
use App\Http\Requests\category\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $category = Category::create($request->all());
        return response()->json($category,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Category::find($id);
        if(!$category){
            return response()->json([
                'error' => 'category not found'
            ], 400);
        }
        return response()->json($category,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request,Category $category)
    {
        $category = Category::find($category->id);
        $category->name = $request->name;
        $category->save();
        return response()->json($category, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        if(!$category){
            return response()->json([
                'error' => 'category not found'
            ], 400);
        }
        $category->delete();
        return response()->json([
            'message' => 'Delete success'
        ],200);
    }
}
