'use server';
/**
 * @fileOverview A Genkit flow for generating professional food photography images.
 *
 * - generateFoodImage - A function that generates a food image based on a name and description.
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
 */
export async function generateFoodImage(input: GenerateFoodImageInput): Promise<string> {
  const { media } = await ai.generate({
    model: 'googleai/imagen-4.0-fast-generate-001',
    prompt: `Professional, high-end food photography of ${input.foodName}. ${input.description || ''}. Cinematic lighting, shallow depth of field, vibrant colors, appetizing, 4k resolution, gourmet presentation.`,
  });

  if (!media?.url) {
    throw new Error('Failed to generate food image');
  }

  return media.url;
}
