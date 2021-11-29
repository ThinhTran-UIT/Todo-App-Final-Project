/**
 * @swagger
 * /api/auth/register:
 *    post:
 *      tags:
 *        - Register
 *      parameters:
 *        - name: username
 *          description: Username
 *          in: formData
 *          required: true
 *          type: string
 *        - name: password
 *          description: Password
 *          in: formData
 *          required: true
 *          type: string
 *      description: Register User
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/auth/login:
 *    post:
 *      tags:
 *        - Login
 *      parameters:
 *        - name: username
 *          description: Username
 *          in: formData
 *          required: true
 *          type: string
 *        - name: password
 *          description: Password
 *          in: formData
 *          required: true
 *          type: string
 *      description: Login User
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/posts:
 *    post:
 *      tags:
 *        - Create Post
 *      parameters:
 *        - name: Authorization
 *          description: Token
 *          in: header
 *          required: true
 *          type: string
 *        - name: title
 *          description: Tile
 *          in: formData
 *          required: true
 *          type: string
 *        - name: usernamePost
 *          description: UsernamePost
 *          in: formData
 *          required: true
 *          type: string
 *        - name: passwordPost
 *          description: PasswordPost
 *          in: formData
 *          required: true
 *          type: string
 *        - name: url
 *          description: URL
 *          in: formData
 *          type: string
 *        - name: status
 *          description: Status
 *          in: formData
 *          type: string
 *      description: Create Post
 *      security:
 *        - bearerAuth: [] 
 *      responses:
 *        200:
 *          description: Success
 */

/**
@swagger
 * /api/posts:
 *    get:
 *      tags:
 *        - Get All Post
 *      parameters:
 *        - name: Authorization
 *          description: Token
 *          in: header
 *          required: true
 *          type: string
 *      description: Get All Post
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/posts/{_id}:
 *    put:
 *      tags:
 *        - Update Post
 *      parameters:
 *        - name: Authorization
 *          description: Token
 *          in: header
 *          required: true
 *          type: string
 *        - name: _id
 *          description: ID Post
 *          in: formData
 *          required: true
 *          type: string
 *        - name: title
 *          description: Tile
 *          in: formData
 *          required: true
 *          type: string
 *        - name: usernamePost
 *          description: UsernamePost
 *          in: formData
 *          required: true
 *          type: string
 *        - name: passwordPost
 *          description: PasswordPost
 *          in: formData
 *          required: true
 *          type: string
 *        - name: url
 *          description: URL
 *          in: formData
 *          type: string
 *        - name: status
 *          description: Status
 *          in: formData
 *          type: string
 *      description: Update Post
 *      security:
 *        - bearerAuth: [] 
 *      responses:
 *        200:
 *          description: Success
 */

/**
@swagger
 * /api/posts/{_id}:
 *    delete:
 *      tags:
 *        - Delete Post By ID
 *      parameters:
 *        - name: Authorization
 *          description: Token
 *          in: header
 *          required: true
 *          type: string
 *      description: Get All Post
 *      responses:
 *        200:
 *          description: Success
 */

