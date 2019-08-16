const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');

const router = express.Router();


/**
 * Author: Jefferson Andrade
 * @GET /post  
 */
router.get('/posts', feedController.getPosts);

/**
 * Author: Jefferson Andrade
 * @POST /post  
 */
router.post('/post', [
    body('title')
        .trim()
        .isLength({ min: 5 }),
    body('content')
        .trim()
        .isLength({ min: 5 }),
],
    feedController.createPost
);

/**
 * Author: Jefferson Andrade
 * @GET /post/:postId  
 */
router.get('/post/:postId', feedController.getPost);


/**
 * Author: Jefferson Andrade
 * @PUT /post/:postId  
 */
router.put('/post/:postId',
    [
        body('title')
            .trim()
            .isLength({ min: 5 }),
        body('content')
            .trim()
            .isLength({ min: 5 })
    ],
    feedController.updatePost
);


/**
 * Author: Jefferson Andrade
 * @DELETE /post/:postId  
 */
router.delete('/post/:postId',
    [
        body('title')
            .trim()
            .isLength({ min: 5 }),
        body('content')
            .trim()
            .isLength({ min: 5 })
    ],
    feedController.updatePost
);

route.delete('/post/:postId', feedController.deletePost);



module.exports = router;