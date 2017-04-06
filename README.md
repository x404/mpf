My Power Farm
================ 

Верстка расположена по адресу [http://mpf.proverstka.com.ua/](http://mpf.proverstka.com.ua), измененная - [http://fl.proverstka.com.ua/](http://fl.proverstka.com.ua)

В html файле прописана строка (meta name="robots" content="noindex,nofollow") запрета индексации - на боевом домене ее удалить. Также не нужен robots.txt, который идет в верстке. Это все запрет от индексации поисковиками на поддомене.

!!!ВАЖНО!!!
SCSS файлы/каталоге нужны только в верстке, при программировании они участия не принимают.
styles.css - результат компиляции scss файлов, поэтому, если надо что-то править, то это необходимо делать в scss файлах с последущей компиляцией в css - можно использовать программу Prepros [https://prepros.io/downloads](https://prepros.io/downloads)  или создавать вслед за styles.css отдельный css файл, в котором переопределять стили. 



---------------------------------------------------------

__Используемые в проекте js плагины__
* Валидация полей ввода в формах jquery validation [http://jqueryvalidation.org/](http://jqueryvalidation.org/)
* Маска ввода для денег - [https://github.com/RobinHerbots/Inputmask](https://github.com/RobinHerbots/Inputmask)
* Стализация выпадающих списков - [dimox.name/jquery-form-styler/](dimox.name/jquery-form-styler/)
* Карусель OwlCarousel2 [https://github.com/OwlCarousel2/OwlCarousel2](https://github.com/OwlCarousel2/OwlCarousel2)
* Всплывающие окна bootstrap modal [http://getbootstrap.com/javascript/#modals-methods](http://getbootstrap.com/javascript/#modals-methods)
* Сообщение для устаревших браузеров Outdated Browser v1.1.3[https://github.com/burocratik/outdated-browser](https://github.com/burocratik/outdated-browser) [Демо](http://outdatedbrowser.com/ru)

---------------------------------------------------------
