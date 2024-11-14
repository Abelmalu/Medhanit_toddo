<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

use App\Http\Controllers\TaskController;



Route::get('/', function () {
    return view('welcome');
});
 Route::get('/task', [TaskController::class, 'store']);
