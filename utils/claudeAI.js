import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function generateMealPlan(userPreference) {
  const systemPrompt = `Generate a concise weekly meal plan for a ${
    userPreference.pregnancyStage
  } pregnant woman. Criteria:
  ${
    userPreference?.allergiesFoodAversionsDietaryRestrictions
      ? `Dietary restrictions, allergies, or food aversions: ${userPreference.allergiesFoodAversionsDietaryRestrictions}`
      : ""
  }
  Meals/day: ${userPreference.mealCountPerDay}
  Cooking: ${userPreference.cookingLevel}
  Cuisine: ${userPreference?.cuisineType || "European"}

  Format:
  [Day]
  - Meal 1: [Name] - [Brief description] - [Key ingredients]
  - Meal 2: [Name] - [Brief description] - [Key ingredients]
  - Meal 3: [Name] - [Brief description] - [Key ingredients]
  (Adjust meals as needed)

  Do not include any introductory text or conclusion. Start directly with the first day of the week.
  Provide a complete 7-day plan. Be concise but ensure all days are included.`;

  try {
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: "Generate the complete 7-day meal plan as instructed.",
        },
      ],
      stream: false,
    });

    const fullResponse = response.content[0].text;
    return fullResponse;
  } catch (error) {
    console.error("Error generating meal plan:", error);
    throw error;
  }
}
