<?php

use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\PostController;
use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\CommentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|

*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login',[UserController::class,'login']);
Route::post('register', [UserController::class,'register']);

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('logout', [UserController::class,'logout']);
    Route::get('details', [UserController::class,'details']);
    Route::apiResource('posts', PostController::class);
    Route::apiResource('comments', CommentController::class);
    Route::apiResource('categories', CategoryController::class);
});
