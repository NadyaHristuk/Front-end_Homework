$(function() {

// Инициализируем плагин, передаем количество слайдов для одновременного показа
// Карусель резиновая, так что можно передавать любое необходимое количество,
// ширина задается в процентах. Задав один слайд для показа получаем слайдер
// Максимальная и минимальная задается в CSS

  $('.jcarousel').jcarousel({showItems: 3});

// Шаблонизатор Резига

  var info = {
    name: 'Вепрецкий Дмитрий Алексеевич',
    photo: 'photo.png',
    occupation: 'Преподаватель, инженер, строитель',
    question: 'Хочу учить фронтенд, потому что:',
    answers: ['Надоел изматывающий график работы, не оставляющий времени ни на что, кроме самой работы',  'IT всегда было моим хобби, пора делать карьеру', 'Всегда можно перейти на freelance', 'Люблю штучную, творческую работу'],
    phone: '+380683136689',
    socialName: 'vk.com',
    socialLink: 'http://vk.com/lynchmasta',
    feedback: 'Если нужно, могу начертить и построить дом'
  };
    var html = $('#profile').html();
    var content = tmplR(html, info); // tmpl переименован в tmplR из-за конфликта имен с Lodash
    $('.template-content').append(content);

  // Шаблонизатор lodash

  var tmpl = _.template($('#profile-lodash').html());
  var html2 = tmpl(info);
  $('.template-content').append(html2);
});
