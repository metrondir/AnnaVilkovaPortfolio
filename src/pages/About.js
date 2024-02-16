import React from "react";

import { Link } from "react-router-dom";

import AnnaImage from "../img/about/AnnaImage.webp";
import handleScroll from "../utils/handleScroll";
import { motion } from "framer-motion";

import { transition1 } from "../transitions";

const About = ({ portfolioRef }) => {
  return (
    <div className="container mx-auto h-full relative">
      <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
        <div className="flex-1 lg:max-h-max order-2 lg:order-none overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.5 }}
            transition={transition1}
            src={AnnaImage}
            srcSet={`${AnnaImage} 1x, ${AnnaImage} 2x`}
            alt="Anna and her life"
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          transition={transition1}
          className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
        >
          <h1 className="h1">Обо мне</h1>
          <p className="max-h-[45vh] max-w-lg overflow-y-auto p-5 rounded-md text-base lg:text-lg xl:text-xl mb-12">
            Я училась в железнодорожном колледже, по профессии «Управление
            пассажирскими перевозками и грузоперевозками» &#128644; &#129299;{" "}
            <br /> Так вот, 4 курс, я уже с 17 лет живу отдельно, параллельно
            работаю кассиром в Сильпо в ночные смены, потому что надо платить за
            квартиру и вообще себе на еду, сразу скажу, мне было очень тяжело в
            этой жизни, но с возраста когда начала работать еще труднее...
            <br />
            На носу дипломная.
            <br /> Я уже тогда понимала что это не мое, работать я там не буду,
            так что решаю пройти курсы на визажиста, так немного подзаработала,
            мне это нравилось, но
            <br /> Мои родные, моя семья (кроме бабушки, чего-то она что-то во
            мне всегда видела), НИКОГДА не поддерживали меня, мои идеи, мои
            мечты, начинания и даже достижения. «СПАСИБО» &#128517; благодаря
            вам я достигаю своих целей и никого не слушаю!
            <br /> Конец обучения, я начинаю фотографировать, беру кредит на
            технику, «понимаю, что добавились расходы &#128553; бросаю
            фотографию, иду зарабатывать почти по профессии.
            <br /> Иду на курсы «проводника пасс. вагона», здесь можно долго
            рассказывать сколько я за все время просто угробила там свое
            здоровье, работа которая до сих пор отзывается мне... работала я там
            2,5 года, после одной операции когда у меня начались осложнения, а
            на работе мне сказали. «Ничего, не умрешь, у тебя рейс», я поняла
            ГОДИ, и снова начинаю фотографировать и работать во Франсуа
            продавцом-баристой, понимаю что моих сил не хватает на все вместе,
            мужчина забирает к себе на работу Товароведом складской логистики,
            все бы ничего, НО...
            <br /> Женский змеиный коллектив, (благодаря Богу хоть несколько
            нормальных людей было, благодаря кому не так падал духом),
            недовольные лица 24/7 даже если я дышу, впоследствии это перешло в
            исчезнувшие документы по моему изменению, вечные конфликты на пустом
            месте, 19 января мы с мужем решаем что все, это последняя точка, я
            снова забросила то чем занималась, снова нервные срывы, мы решаем
            рискнуть, я хочу работать на себя, хочу арендовать помещение для
            студии,23 февраля я увольняюсь,24...война <br />
            Первые пару недель не верилось, работа уже не шла „люди напуганы
            Потом я поняла, что вся жизнь перевернулась с ног на голову
            &#128553;
            <br /> Через некоторое время поехали в Одессу, и все нужно было
            начинать с О, но удивительно, у меня были клиенты, работало
            сарафанное радио, я очень благодарна этому городу &#128524; я еще
            закончила курсы потом парикмахера, поработала в салоне, опять же
            забросив фото, поняла что не хочу больше других профессий, что
            ФОТОГРАФ это все же призвание &#128525;. Впоследствии мы вернулись в
            Николаев, в то время когда людей на улицах почти не было. <br />
            Я в панике что делать, за что браться, где брать деньги на жизнь
            (весь это время работал мужчина, за что я ему всегда очень
            благодарна, единственная человек который всегда меня вытаскивал из
            тех работ, и занимайся уже тем что у тебя получается и нравится,
            развивайся, учись, я помогу, если ты читаешь это, люблю тебя очень.
            &#129505;), в что бы не его поддержка я бы работала где-то админом в
            фотостудии за 5 тыс. &#128517; кто знает тот поймет
            <br /> В этом году, я окончательно поставила перед собой цель, чтобы
            моя мечта стала реальностью, и маленькими шагами я к ней иду! я
            прошла курсы онлайн по фото, купила курс у фотографа
            Николаевского,где-то я поняла что деньги на ветер, но… опыт
            <br />
            Поняла что я хочу учить, не так как меня, чтобы обо мне не говорили
            «деньги на ветер за три дня» и тд Учеба пошла, клиенты появились в
            такого количества, которое не успевало обрабатывать фото за месяц
            &#128517; <br />
            И сейчас вспоминаю тот момент, когда я боялась начать прислушиваться
            к себя, не к людям, к своим желаниям и мечтам, не всегда обычно были
            удачные съемки, не всегда довольны клиенты, но это нормально, это
            жизнь, опыт, мы всему учимся, совершаем ошибки, и идем дальше, не
            надо на одной неудачной съемке останавливаться (и я не о съемке
            &#128521;). Я не боюсь больше конкурентов, что скажут родственники,
            что скажут люди, понравлюсь ли я кому-то или нет, я не боюсь
            ошибиться и сделать не так, Я у себя – на 1 месте, потом все
            остальное. У меня есть своя мысль! И никто не имеет права лезть в
            мою жизнь и учить как правильно, если не вы мне помогали в жизни, то
            и не вам давать мне советы которых я не спрашиваю, как правильно
            поступить. Если ты не будешь слушать свои желания, ты никогда не
            добьешься о чем ты мечтаешь.
            <br /> И да, это действительно круто когда ты идешь по улице, тебя
            останавливают так говорят «привиии, а я на вас подписана, клеевые
            фото», или на святые встречаешь своих клиентов, а они такие «ооо,
            это же наш фотограф», блин, и это официально что ты шаг за шагом
            ближе к цели &#128525; &#128525; &#128525; Я не счастлива только за
            то, что к сожалению в нашей замечательной стране, уровень жизни
            называется «ВЫЖИТЬ», без коррупции никуда, если бы этого не было, я
            думаю каждый бы смог развиваться, самореализовываться и открывать
            собственное дело, но имеем что имеем &#128533; <br />
            Счастлива ли я сейчас, что выбрала эту профессию? Да. И всем желаю
            гореть своей работой и работать с удовольствием &#129392; &#129293;
            <br />
            <br />
          </p>
          <Link
            to={"/#portfolio"}
            className="btn rounded-2xl"
            onClick={() => {
              handleScroll(portfolioRef.current);
            }}
          >
            Посмотреть мои работы
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
