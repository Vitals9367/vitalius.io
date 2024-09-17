---
title: "Mastering Prompt Engineering: Strategies to Maximize AI Output"
summary: "Learn how to craft the perfect prompts to enhance AI performance and unlock new possibilities."
date: "Jun 20, 2024"
draft: false
tags:
- AI
- Prompt Engineering
---

![](https://miro.medium.com/v2/resize:fit:700/0*F797GbkAx6zAjTbh)

In the rapidly evolving world of artificial intelligence, the ability to effectively communicate with AI models through prompts has become an invaluable skill. Whether you’re a developer, a data scientist, or simply a tech enthusiast, crafting the perfect prompt can significantly enhance the quality and relevance of the AI’s responses. In this article, you will learn how to level up your prompt skills and hopefully won’t just improve your interactions with AI, but also unlock new possibilities and efficiencies in your work and projects.

By the way, if you found this interesting and would like to learn more, discuss potential projects, or just connect, feel free to reach out to me on LinkedIn.

-   Connect to me on  [**LinkedIn**](https://www.linkedin.com/in/vitalijusalsauskas/)
-   Any clap/follow for this article helps me out!

# **RTSCEN formula?**

I found that the most effective approach to prompting for me is the  **RTSCEN** formula, which stands for  **Role**,  **Task**,  **Specifics**,  **Context**,  **Examples**, and  **Notes**. This structured method ensures that your prompts are clear, comprehensive, and tailored to produce the best possible outcomes.

![](https://miro.medium.com/v2/resize:fit:494/1*AcJzx8t1Xl_yzpaZHsdI6A.png)

All of these components are part of a prompt, but you can choose which ones to use. Not all are necessary, so feel free to experiment with your prompts and see what works best.

## Role

Role prompting is a technique where the language model (LLM) is assigned a specific role to play during an interaction. This method helps the model immerse itself in the role, enhancing its performance on subsequent tasks.

![](https://miro.medium.com/v2/resize:fit:700/0*Eqd1a_RYZtS2E6IG)

**Example:**  “You are an expert financial advisor with extensive knowledge in investment strategies, market analysis, and portfolio management.”

In this example, the role is clearly defined, and key qualities are highlighted to emphasize the model’s proficiency in this role.

Research indicates that assigning advantageous roles to LLMs can increase accuracy by up to 10%. Moreover, when combined with complimentary descriptions of the LLM’s abilities, accuracy can increase by up to 25% overall.

*Research sources can be found at the bottom of the article.

## Task

The task refers to the specific request that users typically pose to a model, anticipating a specific outcome. It succinctly outlines their desired objective.

**Example:**  Compose persuasive email templates for marketing campaigns targeting healthcare professionals, highlighting the benefits of our medical software solutions.

**Notes:**

-   Keep it brief.
-   Be descriptive and precise while keeping it brief.

One effective method to enhance accuracy in task components is through  **Chain of Thought prompting**. This technique requires the model to think step-by-step according to the prompt’s instructions or, even more effectively, to be provided with a systematic process to follow each time.

![](https://miro.medium.com/v2/resize:fit:700/0*BijpGjjcCTHG_awz.jpg)

**Example:** Write an engaging and informative Medium article about gardening. Make content clear, concise, and easy to understand for a general audience.

Use this step-by-step process to ensure the article is top-notch:

1.  Craft an attention-grabbing opening line that hooks readers and introduces the article’s topic.
2.  Explain key concepts related to the topic with clear definitions and contextual information.
3.  Provide examples or case studies to illustrate key points and reinforce understanding.
4.  Structure the article with subsections that logically flow from one to the next, ensuring a coherent narrative.
5.  Write a concise conclusion that summarizes the main ideas and provides a call to action or takeaway for readers. Include relevant quotes or expert opinions to add credibility and depth to the content.
6.  Proofread and edit the article for grammar, spelling, and punctuation errors to ensure clarity and professionalism.

By the way, if you found this interesting and would like to learn more, discuss potential projects, or just connect, feel free to reach out to me on  [**LinkedIn**](https://www.linkedin.com/in/vitalijusalsauskas/).

## Specifics

The Specifics section provides an opportunity to outline crucial details for executing the task described earlier. Using a list format enables easy addition of new instructions as you test and refine the prompt. It’s important to avoid unnecessary details here; less is more effective.

**Example Task:**  Create compelling and informal outreach messages for individuals aiming to market their niche-specific services or products, emphasizing the integration of AI tools for business scalability. Your messages should be straightforward, friendly, and personalized to initiate a discussion on how AI can enhance their business. Below are the specific requirements:

**Example Specifics:**

-   Each message should include an introduction, body, and conclusion in an informal and engaging tone.
-   Utilize placeholders such as {user.firstname} to personalize introductions.

The Specifics section also offers a chance to incorporate another effective technique known to boost response quality and accuracy:  **Emotion Prompting**.

**Emotion Prompting**  involves adding brief phrases or sentences that evoke emotional responses to the original prompt, thereby enhancing performance. Depending on the scenario, this technique can potentially increase performance by up to 20%. It’s recommended to experiment with this approach to gauge its effectiveness.

**Examples:**

-   This is very important to my career.
-   This task is vital to me and I greatly value your thorough analysis.

## Context

Giving context regarding the operational environment of the LLM and explaining why it is performing a specific task can further enhance performance.

![](https://miro.medium.com/v2/resize:fit:595/0*IpliqAbC0TUd3XEo.jpg)

This approach integrates previous techniques such as Role Prompting (clarifying who the LLM is, what it is doing, and why) and can also leverage Emotion Prompting. It emphasizes the significance of the LLM's role in contributing to the success of the business and society at large.

**Specific Example:**  "Our company specializes in AI-powered solutions for businesses across diverse industries. We regularly receive a large volume of emails from potential clients through our website's contact form. Your task involves classifying these emails, which is crucial for our sales team to prioritize their responses effectively. By accurately identifying opportunities and flagging emails that require urgent attention, you play a pivotal role in driving our company's growth and success. We greatly appreciate your meticulous approach to email classification."

## Examples

In the examples section, we employ a technique called  **Few-Shot Prompting**  to enhance performance and refine response tone, format, and length.  **Few-Shot Prompting**  involves providing a set of input-output examples to the language model as part of the prompt, enabling it to handle new tasks without requiring extensive fine-tuning.

![](https://miro.medium.com/v2/resize:fit:700/0*-RfLEdjwwwRyi6iD.jpg)

Research Findings:

-   GPT-3 175B demonstrated an average improvement of 14.4% over its zero-shot accuracy of 57.4% when utilizing 32 examples per task.

## Notes

The notes section serves as a final opportunity to remind the language model (LLM) of crucial task details and to refine outputs to align with your preferred style. It includes:

-   Instructions on output formatting, such as specifying the required format.
-   Negative prompts to clarify what the output should not include.
-   Adjustments in tone or style preferences.
-   Important task reminders or specific details.

Typically, this list of notes starts off concise but grows longer after multiple tests and adjustments. It allows you to add information without needing to restructure the entire prompt.

The incorporation of the ‘notes’ section in this prompt format is influenced by the “Lost in the Middle” effect. This effect underscores a significant challenge for language models: they perform best when critical information is placed either at the beginning (primacy) or at the end (recency) of the input context. Performance noticeably declines when crucial details are buried in the middle of a lengthy context, despite advancements in models designed to handle extensive input sequences.

# Markdown?

Long prompts can become disorganized. To keep things clear for both us and the LLMs, using markdown offers a way to structure and outline the different components of the RTSCEN formula. Even OpenAI uses markdown for their prompts, so it’s worth trying. Studies comparing markdown to non-markdown prompts have shown that while markdown doesn’t negatively impact performance, it does make prompts more readable for those who write them.

Markdown template:

# Role  
  
# Task  
  
# Specifics  
  
# Context  
  
## Specific context  
  
## Specific context  
  
# Examples  
  
### Example 1  
Q:  
A:  
  
### Example 2  
Q:  
A:  
  
# Notes

# Bonus

## Context Lenght and Costs

If your prompt handles high-volume tasks, it’s crucial to make it as concise as possible. Each time the prompt runs, you are charged for input and output tokens. A shorter prompt means a more cost-effective system. Consider whether your task truly requires all components of the RTSCEN formula and experiment with different prompt versions.

## Choice of Model

You don’t always require the largest and most expensive LLM model. Improved prompt engineering can achieve higher performance from more affordable and quicker models. Whenever feasible, employ prompt techniques to maximize results before considering switching to a new model.

## Temperature & Model Settings

When engaging in creative writing, ideation, and similar tasks, consider testing higher temperature levels. For other tasks, opt for low or zero temperature settings. Consistency and predictability are crucial when developing AI systems. Dealing with the inherent randomness of LLMs can be challenging and disruptive.

![](https://miro.medium.com/v2/resize:fit:612/0*3RRIvFingtr6cn3D)

I hope you found this information valuable! If you’re interested in learning more, discussing potential projects, or simply connecting, feel free to reach out to me on  [**LinkedIn**](https://www.linkedin.com/in/vitalijusalsauskas/)!

Sources:

-   Research papers from  [https://www.promptingguide.ai/papers](https://www.promptingguide.ai/papers)
-   Liam Ottley’s and other AI experts’ YouTube videos