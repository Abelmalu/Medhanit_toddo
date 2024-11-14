<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/todo', [TaskController::class, 'index']);
// Route::get('/todo/{id}', [TaskController::class, 'show']);
Route::post('/create/todo', [TaskController::class, 'store']);
Route::put('/update/todo/{id}', [TaskController::class, 'update']);
Route::get('/search/todo/{title}', [TaskController::class, 'search']);
Route::delete('/delete/todo/{id}',[TaskController::class, 'destroy']);


