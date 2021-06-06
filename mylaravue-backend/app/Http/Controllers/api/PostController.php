<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\post\StorePostRequest;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();
        foreach ($posts as $post) {
            $post->category = $post->category;
        }
        return response()->json($posts, 200);
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
    public function store(StorePostRequest $request)
    {
        if ($request->hasFile('image')) {
            $path='images/'.Carbon::now()->year.'/'.Carbon::now()->month;
            if(!file_exists($path)){
                $result= mkdir($path,0777,true);
            }
            $file = $request->file('image');
            $name =$file->getClientOriginalName();
            $newName = Str::random(5)."_".$name;
            while(file_exists($path.'/'.$newName)){
                $newName = Str::random(5)."_".$name;
            }
            $file->move($path,$newName);
        }
        $input = $request->all();
        $input['image'] = Carbon::now()->year.'/'.Carbon::now()->month.'/'.$newName;
        $input['view'] = 0;
        $post = Post::create($input);

        return response()->json($post, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        $post = Post::find($post->id);
        if(!$post){
            return response()->json([
                'error' => 'category not found'
            ], 400);
        }
        return response()->json($post,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
