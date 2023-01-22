const userBornYear = prompt('Ваш год рождения?', 1991);
const userCityLiving = prompt('В каком городе вы живете?', 'Одесса');
const userFavoriteSport = prompt('Ваш любимый вид спорта?', 'Формула 1');
const userAge = 2023 - Number(userBornYear);

const formulaSport = 'Lewis Hamilton';
const footballSport = 'Lionel Messi';
const backetballSport = 'Stephen Curry';

if (userCityLiving == 'Киев' && userFavoriteSport == 'Формула 1') {
    
    alert(`Твой возраст ${userAge}, ты живешь в столице Украины. Круто! Хочешь стать ${formulaSport}`);

} else if (userCityLiving == 'Киев' && userFavoriteSport == 'Футбол') {
    
    alert(`Твой возраст ${userAge}, ты живешь в столице Украины. Круто! Хочешь стать ${footballSport}`);

} else if (userCityLiving == 'Киев' && userFavoriteSport == 'Баскетбол') {
    
    alert(`Твой возраст ${userAge}, ты живешь в столице Украины. Круто! Хочешь стать ${backetballSport}`);

} else if (userCityLiving == 'Лондон' && userFavoriteSport == 'Формула 1') {
    
    alert(`Твой возраст ${userAge}, ты живешь в столице Англии. Круто! Хочешь стать ${formulaSport}`);

} else if (userCityLiving == 'Лондон' && userFavoriteSport == 'Футбол') {
    
    alert(`Твой возраст ${userAge}, ты живешь в столице Англии. Круто! Хочешь стать ${footballSport}`);

} else if (userCityLiving == 'Лондон' && userFavoriteSport == 'Баскетбол') {
    
    alert(`Твой возраст ${userAge}, ты живешь в столице Англии. Круто! Хочешь стать ${backetballSport}`);

} else if (userCityLiving == 'Вашингтон' && userFavoriteSport == 'Формула 1') {
    
    alert(`Твой возраст ${userAge}, ты живешь в столице США. Круто! Хочешь стать ${formulaSport}`);

} else if (userCityLiving == 'Вашингтон' && userFavoriteSport == 'Футбол') {
    
    alert(`Твой возраст ${userAge}, ты живешь в столице США. Круто! Хочешь стать ${footballSport}`);

} else if (userCityLiving == 'Вашингтон' && userFavoriteSport == 'Баскетбол') {
    
    alert(`Твой возраст ${userAge}, ты живешь в столице США. Круто! Хочешь стать ${backetballSport}`);

} else if (userBornYear == null) {

    alert('Жаль что вы не захотели вводить свой год рождения');

} else if (userCityLiving == null) {
    
    alert('Жаль что вы не захотели вводить свой город');

} else if (userFavoriteSport == null) {
    
    alert('Жаль что вы не захотели вводить свой любимый вид спорта');

} else {

    if(userFavoriteSport == 'Футбол') {

        alert(`Твой возраст ${userAge}, ты живешь в городе ${userCityLiving}. Круто! Хочешь стать ${footballSport}`);

    } else if ( userFavoriteSport == 'Баскетбол') {

        alert(`Твой возраст ${userAge}, ты живешь в городе ${userCityLiving}. Круто! Хочешь стать ${backetballSport}`);

    } else if ( userFavoriteSport == 'Формула 1') {

        alert(`Твой возраст ${userAge}, ты живешь в городе ${userCityLiving}. Круто! Хочешь стать ${formulaSport}`);

    }

    alert(`Твой возраст ${userAge}, ты живешь в городе ${userCityLiving}. Круто! Но я не знаю такого вида спорта`);

}