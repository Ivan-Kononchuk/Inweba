//  SLIDER testimonials START

const prevComment = document.querySelector('.slider_left');
const nextComment = document.querySelector('.slider_right');
const sliderCard = document.querySelectorAll('.slider_card');
const sliderStrip = document.querySelectorAll('.slider_strip');

let cardIndex = 0;

function updateSlider(){
	sliderStrip.forEach((card, index)=> {
		card.classList.remove('slider_strip_active');

		if (index === cardIndex + 1) {
			card.classList.add('slider_strip_active');
		}
	});

	let offset = cardIndex * -679;

	document.querySelector('.slider_container').style.transform = `translateX(${offset}px)`;
}

function updateButtons() {
    // Активуємо/деактивуємо кнопки в залежності від позиції
    prevComment.classList.toggle('slider_button_active', cardIndex > 0);
    nextComment.classList.toggle('slider_button_active', cardIndex < sliderCard.length - 2);
}

nextComment.addEventListener('click', () => {
    if (cardIndex < sliderCard.length - 2) {
        cardIndex++;
        updateSlider();
        updateButtons();
    }
});

prevComment.addEventListener('click', () => {
    if (cardIndex > 0) {
        cardIndex--;
        updateSlider();
        updateButtons();
    }
});

updateSlider();

//  SLIDER testimonials END


//  FAQ question animations START


const faqItems = document.querySelectorAll('.faq_questions');

faqItems.forEach(item => {
  const question_toggle = item.querySelector('.question_toggle');
  const question = item.querySelector('.faq_question');
  const answer = item.querySelector('.faq_answer');
  const faq_icon = item.querySelector('.faq_icon');
  const questions = item;


  question_toggle.addEventListener('click', () => {
    // Спочатку закриваємо всі інші питання
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.faq_question').classList.remove('open');
        otherItem.querySelector('.faq_answer').classList.remove('open');
        otherItem.querySelector('.faq_icon').src = 'imgs/open.png';
        otherItem.classList.remove('open');
      }
    });

    // Відкриваємо або закриваємо поточне питання
    question.classList.toggle('open');
    answer.classList.toggle('open');
    questions.classList.toggle('open');
    faq_icon.src = faq_icon.src.includes('close.png') ? 'imgs/open.png' : 'imgs/close.png';
  });
});

//  FAQ question animations END