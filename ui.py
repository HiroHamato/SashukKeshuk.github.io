from tkinter import *
from tkinter import messagebox

root = Tk()

def post():
	text = textInput.get()
	houseT = houseType.get()
	house = Type.get()
	cost = Cost.get()
	rooms = roomInput.get()
	messagebox.showinfo(title='succes', message='article was added successfully!')
	print(text + '\n')
	print(house + '\n')
	print(houseT + '\n')
	print(cost + '\n')
	print(rooms + '\n')
	#request to add to db


root['bg'] = '#000'
root.title('admin panel')
root.geometry('600x550')

root.resizable(width=False, height=False)

canvas = Canvas(root, height=600, width=550)
canvas.pack()

frame = Frame(root, bg='#000')
frame.place(relx=0, rely=0, relwidth=1, relheight=1)

title = Label(frame, text='add atricle', bg='#000', fg='#fff', font=35)
title.pack(pady=10)

textInput = Text(frame, bg='#000', fg='#fff', width='60', height='20', cursor='cross white')
textInput.pack()
#textInput.insert(0, 'article')
roomInput = Entry(frame, bg='#000', fg='#fff')
roomInput.pack(pady=8)
roomInput.insert(0, 'rooms')
houseType = Entry(frame, bg='#000', fg='#fff')
houseType.pack(pady=8)
houseType.insert(0, 'housetype (villa - 1, aports - 0)')
Cost = Entry(frame, bg='#000', fg='#fff')
Cost.pack(pady=8)
Cost.insert(0, 'cost')
Type = Entry(frame, bg='#000', fg='#fff')
Type.pack(pady=8)
Type.insert(0, 'type (from ? - 0, from arend - 1)')


btn = Button(frame, text='submit', bg='#000', fg='#fff', command=post)
btn.pack(pady=8)

root.mainloop()