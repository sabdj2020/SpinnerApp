create schema spinner;

create table app_user (
	id serial primary key,
	username varchar(30) unique not null,
	passwd varchar(30) not null,
	first_name varchar(30),
	last_name varchar(30)
);

create table band (
	id serial primary key,
	name varchar(30)
);

create table band_mates (
	id serial primary key,
	band_id int references band,
	user_id int references app_user
);

create table music (
	id serial primary key,
	spotify_key varchar(50)
);

create table post (
	id serial primary key,
	title text,
	band_id int references band,
	post_time timestamp,
	user_id int references app_user,
);

create table post_like (
	id serial primary key,
	post_id int references post,
	user_id int references app_user
);

create table post_comment (
	id serial primary key,
	post_id int references post,
	user_id int references app_user,
	comment_text text,
	comment_time timestamp
);

create table comment_music (
	id serial primary key,
	comment_id int references post_comment,
	music_id int references music
);

create table comment_like (
	id serial primary key,
	comment_id int references post_comment,
	user_id int references app_user
);

create table post_music (
	id serial primary key,
	post_id int references post,
	music_id int references music
);

create table question_otd (
	id serial primary key,
	question text,
);

create table qotd_response (
	id serial primary key,
	question_id int references question_otd,
	music_id int references music,
	user_id int references app_user,
	question_date date
);

create table qotd_like (
	id serial primary key,
	response_id int references qotd_response,
	user_id int references app_user
);

ALTER TABLE app_user ALTER COLUMN passwd TYPE CHARACTER varying(255);
ALTER TABLE post ADD COLUMN likes int;
ALTER TABLE post_comment ADD COLUMN likes int;
ALTER TABLE qotd_response ADD COLUMN likes int;
