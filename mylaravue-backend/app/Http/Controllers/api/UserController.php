<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\user\LoginRequest;
use App\Http\Requests\user\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public $successStatus = 200;


     /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(RegisterRequest $request)
    {
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        return response()->json($success, $this-> successStatus);
    }
    public function login(LoginRequest $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = User::whereEmail($request->email)->first();
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            return response()->json($success, $this-> successStatus);
        }
        else{
            return response()->json(['error_info'=>'Email address or password is incorrect!'], 401);
        }
    }
     /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function details()
    {
        $user = Auth::user();

        return response()->json($user, $this-> successStatus);
    }
    public function logout(Request $request)
    {

        $request->user()->token()->revoke();
        return response(['message' => 'You have been successfully logged out.'], 200);
    }
}