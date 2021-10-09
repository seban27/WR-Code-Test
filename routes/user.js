const express = require('express');
const router = express.Router();

const userController = require('../api/controllers/user_controller');
/**
 * @swagger
 * /user:
 *   post:
 *     summary: Add user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: First name.
 *                 example: Test
 *               last_name:
 *                 type: string
 *                 description: Last name.
 *                 example: User
 *               introduction:
 *                 type: string
 *                 description: introduction.
 *                 example: Dedicate 1-2 sentences to explaining why the article is important.
 *               phone_code:
 *                 type: integer
 *                 description: Phone Code.
 *                 example: +91
 *               phone:
 *                 type: integer
 *                 description: Phone.
 *                 example: 1234567890
 *               email:
 *                 type: string
 *                 description: Email.
 *                 example: user@mailinator.com
 *               experience:
 *                 type: integer
 *                 description: Experience (in Years).
 *                 example: 1
 *               achievements:
 *                 type: string
 *                 description: Achievements.
 *                 example: Awards won for specific activities or subjects (i.e., Most Valuable Player (MVP), Fine Art Award)
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                 message:
 *                   type: boolean
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                 message:
 *                   type: boolean
 */
router.post('/', userController.insertRecord);

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get users
 *     tags:
 *       - User
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                 message:
 *                   type: boolean
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                 message:
 *                   type: boolean
 */
router.get('/', userController.findAllRecords);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get user
 *     tags:
 *       - User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                 message:
 *                   type: boolean
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                 message:
 *                   type: boolean
 */
router.get('/:id', userController.findRecordById);

module.exports = router;
