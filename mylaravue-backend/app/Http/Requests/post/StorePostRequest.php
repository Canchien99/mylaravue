<?php

namespace App\Http\Requests\post;

use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|min:10|unique:posts,title',
            'description' => 'required|min:20',
            'content' => 'required',
            'category_id' => 'required',
            'image' => 'image',
            'status' => 'required'
        ];
    }
    protected function failedValidation(Validator $validator)
    {

        $errors = (new ValidationException($validator))->errors();
        throw new HttpResponseException(response()->json($errors, JsonResponse::HTTP_UNPROCESSABLE_ENTITY));
    }
}