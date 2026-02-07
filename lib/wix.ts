// @ts-nocheck
import { createClient, OAuthStrategy } from '@wix/api-client';
import type { WixOffer, WixTestimonial, WixQuizQuestion, WixQuizResponse } from './wix-types';

const wixClient = createClient({
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || '',
    tokens: {
      accessToken: process.env.NEXT_PUBLIC_WIX_ACCESS_TOKEN || '',
      refreshToken: process.env.NEXT_PUBLIC_WIX_REFRESH_TOKEN || '',
    },
  }),
});

export async function getOffers(): Promise<WixOffer[]> {
  const { items } = await wixClient.items.queryDataItems({
    dataCollectionId: 'Offers',
  });
  return items as WixOffer[];
}

export async function getTestimonials(): Promise<WixTestimonial[]> {
  const { items } = await wixClient.items.queryDataItems({
    dataCollectionId: 'Testimonials',
  });
  return items as WixTestimonial[];
}

export async function getQuizQuestions(): Promise<WixQuizQuestion[]> {
  const { items } = await wixClient.items.queryDataItems({
    dataCollectionId: 'QuizQuestions',
  });
  return items as WixQuizQuestion[];
}

export async function submitQuizResponse(response: Omit<WixQuizResponse, '_id' | 'createdAt'>) {
  return wixClient.items.createDataItem({
    dataCollectionId: 'QuizResponses',
    data: {
      ...response,
      createdAt: new Date().toISOString(),
    },
  });
}