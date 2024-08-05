import { NextResponse} from 'next/server'
import OpenAI from "openai"

const systemPrompt = `
Welcome to Headstarter Support! How can I assist you today?

General Information:

What is Headstarter?
How does the AI interview process work?
Pricing and subscription plans
Account Management:

How to create an account
Password reset and account recovery
Managing your profile and settings
Interview Preparation:

Setting up your first practice interview
Customizing interview questions and difficulty levels
Understanding interview feedback and scoring
Technical Issues:

Troubleshooting common technical problems
Issues with video or audio during the interview
Problems with loading or accessing the website
Billing and Payments:

Understanding your billing statement
Updating payment methods
Resolving payment issues
Feedback and Support:

Providing feedback on your interview experience
Contacting customer support for additional help
Reporting bugs or issues with the platform
`


export async function POST(req) {
    const openai = new OpenAI()
    const data = await req.json()
    
    const completion = await openai.chat.completions.create({
    messages: [
        {role: "system", content: systemPrompt}, ...data],
    model: "gpt-3.5-turbo",
  });

  console.log()
    return NextResponse.json(
        {message: completion.choices[0].message.content}, 
        {status: 200},
        )
}