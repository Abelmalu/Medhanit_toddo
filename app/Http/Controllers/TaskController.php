<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Task;


class TaskController extends Controller
{
    public function index(){

        return Task::all();

    }
    public function create(){

    }
    public function show($id){

        return Task::find($id);

    }


   public function store(Request $request)
    {

        $validated = $request->validate([

        ]);
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'nullable|string'
        ]);

        if($validator->fails()){

            return $validator->errors();
        }

        else{

            $task = new Task();
            $task->title = $request->get('title');
            $task->description = $request->get('description');

            $result = $task->save();
            if ($result) {
                return ['success' => "task successfully saved"];
            } else {

                return ['error' => "not saved to the db"];
            }


        }







    }


    public function search($status) {

        return Task::where('status',$status)->get();
    }
    public function update(Request $request,  $id){

        $task = Task::find($id);



        $task->title = $request->get('title');
        $task->description = $request->get('description');
        $result = $task->save();

        if($result){

            return ['sucess'=>'successfully update'];
        }

        else{

            return ['error'=>'something went wrong '];
        }




    }


    public function changeStatus(Request $request,$id){

        $task = Task::find($id);
        $task->status = 1;

        $result = $task->save();
        if($result){

             return Task::all();


        }
        else{

            return['error','something went wrong'];
        }





    }
    public function destroy($id){
        $task = Task::find($id);

        $result = $task->delete();

        if($result){

            return Task::all();
        }
        else{

            return ["error",'could not delete the record'];
        }

    }

}
