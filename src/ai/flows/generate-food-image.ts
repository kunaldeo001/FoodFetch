'use server';
/**
 * @fileOverview A Genkit flow for generating professional food photography images.
 * 
 * Includes a fallback mechanism to high-quality placeholder images if the AI model 
 * is unavailable on the user's plan.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateFoodImageInputSchema = z.object({
  foodName: z.string().describe('The name of the food item to generate an image for.'),
  description: z.string().optional().describe('An optional description to refine the image generation.'),
});

export type GenerateFoodImageInput = z.infer<typeof GenerateFoodImageInputSchema>;

/**
 * Generates a professional food photography image using Imagen 4.
 * Falls back to a deterministic high-quality placeholder if the AI service fails.
 */
export async function generateFoodImage(input: GenerateFoodImageInput): Promise<string> {
  try {
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Professional, high-end food photography of ${input.foodName}. ${input.description || ''}. Cinematic lighting, shallow depth of field, vibrant colors, appetizing, 4k resolution, gourmet presentation.`,
    });

    if (media?.url) {
      return media.url;
    }
  } catch (err) {
    // Graceful fallback if the user is on a free plan or hits quota limits
    console.warn(`AI Image generation failed for ${input.foodName}. Falling back to high-quality placeholder.`, err);
  }

  // Deterministic fallback based on food name
  const seed = input.foodName.toLowerCase().replace(/[^a-z0-9]/g, '-');
  return `https://picsum.photos/seed/${seed}/800/600`;
}
