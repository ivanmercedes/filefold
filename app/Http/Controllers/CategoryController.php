<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{

    /**
     * Display the specified category or child category.
     *
     * @param  \App\Models\Category  $category
     * @param  \App\Models\Category|null  $child
     * @return \Inertia\Response
     */
    public function show(Category $category, Category $child = null)
    {
        if ($category->slug === 'inicio') {
            return redirect(route('home.index'), 301);
        }

        $data = $child ? $this->getChildData($child) : $this->getCategoryData($category);

        return Inertia::render('Category', $data);
    }

    /**
     * Get data for a child category.
     *
     * @param  \App\Models\Category  $child
     * @return array
     */
    protected function getChildData(Category $child): array
    {
        return [
            'page' => $child,
        ];
    }

    /**
     * Get data for a parent category.
     *
     * @param  \App\Models\Category  $category
     * @return array
     */
    protected function getCategoryData(Category $category): array
    {
        return [
            'page' => $category,
        ];
    }
}
