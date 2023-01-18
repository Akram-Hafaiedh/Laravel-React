<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Posts/Index', [
            //! Eager loading Post with user ID and name
            //! Ordered in reverse-chronological order
            // We only need name and id of the user
            'posts' => Post::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *  Saving the message
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255'
        ]);

        $request->user()->posts()->create($validated);

        return redirect(route('posts.index'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //! autorize will prevent everyone from being able to update the POST
        //! We can specify who is allowed to update by creating a Model Policy
        $this->authorize('update', $post);

        $validated = $request->validate([
            'message' => 'required|string|max:255'
        ]);

        $post->update($validated);
        return redirect(route('posts.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //

        $this->authorize('delete', $post);

        $post->delete();

        return redirect(route('posts.index'));
    }
}
