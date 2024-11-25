<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Models\Category;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $categories = Category::with(['children'])->whereNull('parent_id')->get();
    $page = Category::where('slug', 'inicio')->first();
    return Inertia::render('Welcome', [
        'groups' => $categories,
        'page' => $page
    ]);
})->name('home.index');

Route::get('/{category:slug}/{child:slug?}', [CategoryController::class, 'show'])
    ->name('category.view');

Route::get('/inicio', function () {
    return redirect(route('home.index'), 301);
});

// require __DIR__ . '/auth.php';
