import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const question = searchParams.get('question');

  const body = JSON.stringify({
    messages : [
      {
        role: "user",
        content: question + ' 語尾に「なのだ」をつけてしゃべってください。',
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body,
  });
  const data = await response.json();
  const choice = 0;

  return NextResponse.json({ answer : data.choices[choice].message })
}