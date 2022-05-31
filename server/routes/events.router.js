const router = require('express').Router();

const {
  Event, Sport, Place, User, Participant,
} = require('../db/models');

router.get('/', async (req, res) => {
  const { user } = req.session;
  const events = await Event.findAll();
  const sports = await Sport.findAll();
  const places = await Place.findAll();
  const participants = await Participant.findAll({ where: { user_id: user.id } });
  const allParticipants = await Participant.findAll({ raw: true });
  const participant = await Participant.findAll({ where: { user_id: user.id }, raw: true });
  // Достаем и создаем массив нужных айди евентов
  const arr = [];
  const partArr = participant.map((el) => arr.push(el.EventId));
  const userEvents = await Event.findAll({ where: { id: arr }, raw: true });
  console.log('get na events', participant, arr, userEvents);

  // const userEvents = await Event.findAll({where: {id: participant[0].EventId}})
  res.json({
    events, sports, places, participants, allParticipants, userEvents,
  });
});

router.post('/', async (req, res) => {
  const {
    title, date, description, members_count, user_id, sport_id, place_id, cost,
  } = req.body;
  const sportId = await Sport.findOne({ where: { title: sport_id } });
  const placeId = await Place.findOne({ where: { title: place_id } });
  const newEvent = await Event.create({
    title, date, description, members_count, cost, user_id, sport_id: sportId.id, place_id: placeId.id,
  });
  res.json(newEvent);
});

module.exports = router;
