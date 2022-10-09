from aiogram import Bot, types
from aiogram.dispatcher import Dispatcher
from aiogram.utils import executor
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, ReplyKeyboardRemove, InlineKeyboardButton, InlineKeyboardMarkup, web_app_info
from config import API

import os

#message.text

webApp = web_app_info.WebAppInfo(url="https://sashukkeshuk.github.io")

b1 = KeyboardButton('go', web_app=webApp)

markup = ReplyKeyboardMarkup(resize_keyboard=True, row_width=1)
markup.add(b1)

bot = Bot(token=API)
dp = Dispatcher(bot)

async def on_startup(_):
	print('Бот вышел в онлайн')

@dp.message_handler(content_types=['web_app_data'])
async def get(msg):
	print(msg.web_app_data.data)

@dp.message_handler(commands=['start'])
async def command_start(message : types.Message):
    await bot.send_message(message.from_user.id, 'Приятного <i>аппетита</i>', parse_mode='html', reply_markup=markup)

@dp.message_handler(content_types=['photo'])
async def echo_send(message : types.Message):
	await bot.send_message(message.from_user.id, 'найс фото!')


executor.start_polling(dp, skip_updates=True, on_startup=on_startup)