const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    const topicData = await ClassSurveyModel.getAllTopicData;
    res.render('template', {
        locals: {
            title: 'Class Survey',
        },
        partials: {

        }
    })
});

module.exports = router;