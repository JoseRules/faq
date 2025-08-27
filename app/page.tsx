'use client'

import { useState } from 'react'
import questions from "./assets/questions"
import { parseAnswerText } from "./utils/textParser"

export default function Home() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set())
  const [openSubcategories, setOpenSubcategories] = useState<Set<string>>(new Set())

  const toggleCategory = (categoryId: string) => {
    const newOpenCategories = new Set(openCategories)
    if (newOpenCategories.has(categoryId)) {
      newOpenCategories.delete(categoryId)
    } else {
      // Close all other categories and subcategories when opening a new one
      newOpenCategories.clear()
      newOpenCategories.add(categoryId)
      setOpenSubcategories(new Set())
    }
    setOpenCategories(newOpenCategories)
  }

  const toggleSubcategory = (subcategoryId: string) => {
    const newOpenSubcategories = new Set(openSubcategories)
    if (newOpenSubcategories.has(subcategoryId)) {
      newOpenSubcategories.delete(subcategoryId)
    } else {
      // Close all other subcategories when opening a new one
      newOpenSubcategories.clear()
      newOpenSubcategories.add(subcategoryId)
    }
    setOpenSubcategories(newOpenSubcategories)
  }

  const closeSubcategory = (subcategoryId: string) => {
    const newOpenSubcategories = new Set(openSubcategories)
    newOpenSubcategories.delete(subcategoryId)
    setOpenSubcategories(newOpenSubcategories)
  }

  const renderSubcategory = (subcategory: any) => (
    <div key={subcategory.id} className="border-l-2 border-gray-300 dark:border-gray-600 ml-4">
      <button
        onClick={() => toggleSubcategory(subcategory.id)}
        className="w-full px-2 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-between"
      >
        <h4 className="font-medium text-foreground">
          {subcategory.title}
        </h4>
        <svg
          className={`w-4 h-4 text-foreground transition-transform duration-200 ${
            openSubcategories.has(subcategory.id) ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {openSubcategories.has(subcategory.id) && (
        <div className="px-0.5 pb-3 space-y-3" key={subcategory.id}>
          {subcategory.content.map((item: any) => (
            <div 
              key={item.id} 
              className="border-l-4 border-primary pl-4 py-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => closeSubcategory(subcategory.id)}
            >
              <h5 className="font-medium text-foreground mb-2">
                {item.question}
              </h5>
              <div className="text-foreground/80 text-sm leading-relaxed">
                {parseAnswerText(item.answer || '')}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-8">
          Study Questions
        </h2>
        
        {questions.map((category) => (
          <div key={category.id} className="bg-surface border border-border rounded-lg overflow-hidden">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full px-4 py-4 text-left bg-surface hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-between"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {category.title}
              </h3>
              <svg
                className={`w-5 h-5 text-foreground transition-transform duration-200 ${
                  openCategories.has(category.id) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Category Content */}
            {openCategories.has(category.id) && (
              <div className="px-1 pb-4 space-y-2">
                {category.content.map((item) => {
                  if (item.type === 'subcategory') {
                    return renderSubcategory(item)
                  }
                  // Handle direct questions (if any) - this case shouldn't happen with current structure
                  return null
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
