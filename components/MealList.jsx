"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

function MealList() {
  const { data: session } = useSession();
  const [mealPlan, setMealPlan] = useState([]);
  const [expandedMeals, setExpandedMeals] = useState({});

  useEffect(() => {
    getAllMeals();
  }, [session]);

  const getAllMeals = async () => {
    if (session) {
      try {
        const response = await axios.get(
          "/api/core/meal-preferences?user_email=" + session.user.email
        );
        if (response.data.length === 0) {
          console.log("No meal preferences found for user");
          return;
        }
        setMealPlan(response.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
        const timer = setTimeout(() => {
          getAllMeals();
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  };

  const toggleMealPlan = (mealId) => {
    setExpandedMeals((prev) => ({
      ...prev,
      [mealId]: !prev[mealId],
    }));
  };

  const getPreview = (text) => {
    const lines = text.split("\n");
    return lines.slice(0, 3).join("\n") + (lines.length > 3 ? "\n..." : "");
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <section className="container max-w-7xl mx-auto flex flex-col items-center justify-between px-8 py-8 lg:py-20 gap-10">
      <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex justify-center items-center mb-0 lg:mb-7">
        <span className="relative">
          Your <strong className="text-primary">meals</strong>
        </span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-16">
        <div className="flex flex-wrap gap-5">
          {mealPlan.length > 0 &&
            mealPlan.map((meal) => (
              <div
                className="card bg-base-500 w-full lg:w-96 shadow-2xl relative"
                key={meal._id}
              >
                <div className="card-body">
                  <h2 className="card-title text-center font-extrabold text-2xl lg:text-4xl tracking-tight mb-4">
                    <span className="relative mx-auto">
                      Personal{" "}
                      <strong className="text-primary">Meal Plan</strong>
                    </span>
                  </h2>

                  <h4 className="opacity-60">
                    Created on: {formatDate(new Date(meal.dateModified))}
                  </h4>

                  {expandedMeals[meal._id] && (
                    <>
                      <div className="sticky top-2 right-2 pt-2 pb-2 z-10 w-full">
                        <div className="relative">
                          <button
                            onClick={() => toggleMealPlan(meal._id)}
                            className="btn btn-sm btn-neutral absolute top-0 right-0"
                          >
                            Show Less
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  <pre className="whitespace-pre-wrap text-sm">
                    {expandedMeals[meal._id]
                      ? meal?.generatedMealPlans
                      : getPreview(meal?.generatedMealPlans)}
                  </pre>

                  <button
                    onClick={() => toggleMealPlan(meal._id)}
                    className="btn btn-primary mt-auto"
                  >
                    {expandedMeals[meal._id] ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default MealList;
