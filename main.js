
    var month = 9;
    var year = 2026;
    var card_selected = 0;

    function back() {
        month -= 1;
        render_calendar();
    }
    function next() {
        month += 1;
        render_calendar();
    }

    function card_next () {
        card_selected+=1;
        render_card();
    }
    function render_calendar() {
        var month_text = document.querySelector(".month_text");
        let month_names = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
        if(month > 11 || month < 0) {
            if(month > 11) {
                year+=1;
                month = 0;
            }
            if(month < 0) {
                year-=1;
                month = 11;
            }
        }
        month_text.innerHTML = month_names[month] + " " + year;
    }

    function render_card() {
        let titles = ['🌳Поездка в Школьный Лагерь🧭.', '📖Магия Школьной Библиотеки📚.', '🍂С днем знаний!💐', '👀Школьная газета ищет сотрудников!🧐'];
        let texts = ['Недавно наша редакция побывала в школьном лагере. Читайте как это было!', 'Сегодня в школьной библиотеке прошло значимое мероприятие!', 'Код 161 поздравляет Вас с Днём Знаний!', 'Наша школьная газета ищет сотрудников'];
        let images = ["news_card_img1.jpg", "card_img2.jpg", "card_img3.jpg", "card_img4.jpg"];
        let indicator = ["🟡⚪⚪⚪","⚪🟡⚪⚪", "⚪⚪🟡⚪", "⚪⚪⚪🟡"];
        var h1 = document.querySelector('.hero_card_text h1');
        var h2 = document.querySelector(".hero_card_text h2");
        var indicator_text = document.getElementById("indicator_text");
        if(card_selected > 3 || card_selected < 0) {
            card_selected = 0;
        }
        h1.innerHTML = titles[card_selected];
        h2.innerHTML = texts[card_selected];
        indicator_text.innerHTML = indicator[card_selected];
        document.getElementById("hero_card_img").src = images[card_selected];

    }