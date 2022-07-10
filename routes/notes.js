const express = require('express');
const {addNote, getNote, getNotes} = require('../controller/note');
const router7 = express.Router();

router7.route('/notes/:evalId/:userId').post(addNote)
router7.route('/notes/:evalId/:userId').get(getNote)
router7.route('/notes/:userId').get(getNotes)
module.exports = {router7};