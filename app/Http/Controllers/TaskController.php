<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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

        // $validated = $request->validate([
        //     'title'=>'required|string',
        //     'description'=>
        // ]);

        $task = new Task();
        $task->title=$request->get('title');
        $task->description = $request->get('description');

        $result = $task->save();
        if($result){
            return ['success' => "task successfully saved"];

        }

        else{

            return ['error'=>"not saved to the db"];
        }






    }


    public function search($title) {

        return Task::where('title',$title)->get();
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
    public function destroy($id){
        $task = Task::find($id);

        $result = $task->delete();

        if($result){

            return ['success','result has been deleted'];
        }
        else{

            return ["error",'could not delete the record'];
        }

    }

}
