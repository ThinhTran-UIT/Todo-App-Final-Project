/**
 * @swagger
 * /api/auth/register:
 *    post:
 *      tags:
 *        - Register
 *      parameters:
 *        - name: username
 *          description: Username
 *          in: path
 *          required: true
 *          type: string
 *        - name: password
 *          description: Password
 *          in: path
 *          required: true
 *          type: string
 *      description: Register User
 *      responses:
 *        200:
 *          description: Success
 */
/*
/**
 * @swagger
 * /api/students:
 *    post:
 *      tags:
 *        - Student
 *      description: Create student
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/students/{id}:
 *    get:
 *      tags:
 *        - Student
 *      parameters:
 *        - name: id
 *          description: Student ID
 *          in: path
 *          required: true
 *          type: number
 *      description: Get students by ID
 *      responses:
 *        200:
 *          description: Success
 *  
 */
