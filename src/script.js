import axios from 'axios';
import $ from 'jquery';

$(document).ready(() => {
  $(".chat-btn").click(() => {
      $(".container").slideToggle("slow")
  })
})

const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const apiKey = "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";

export default function chatty(){



  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = input.value;
    input.value = "";
  
    messages.innerHTML += `<div class="message user-message">
    <img src="user-tie-solid.svg" alt="user icon"> <span>${message}</span>
    </div>`;
  
    // Use axios library to make a POST request to the OpenAI API
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: message,
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const chatbotResponse = response.data.choices[0].text;
  
    return messages.innerHTML += `<div class="message bot-message">
    <img src="robot-solid.svg" alt="bot icon"> <span>${chatbotResponse}</span>
    </div>`;
  });





}

