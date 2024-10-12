import Joi from 'joi'

export const productSchema = Joi.object({
    name: Joi.string().required().min(5).messages({
        "any.required":"Tên sản phẩm là trường bắt buộc",
        "string.empty":"Tên sản phẩm không được để trống",
        "string.min":"Tên sản phẩm phải có ít nhất 5 ký tự"
    }),
    price: Joi.number().required().messages({
        "any.required":"Tên sản phẩm là trường bắt buộc",
        "number.base":"Giá sản phẩm phải là số"
    }),
    image: Joi.string().required().messages({
        "any.required":"Ảnh sản phẩm là trường bắt buộc",
        "string.empty":"Ảnh sản phẩm không được để trống",
    })
})