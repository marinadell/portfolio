CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

INSERT INTO projects ("name", "description", "thumbnail", "github", "date_completed", "tag_id")
VALUES ('Feedback App', 
'allows the user to add feedback over 4 views and collect them in the database.', 
'/images/feedback_snapshot.jpg', 
'https://github.com/marinadell/redux-feedback-loop', 
'04-07-2019', '1');


--Gets data from database
SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed", "tags"."name" FROM projects
JOIN tags ON "projects"."tag_id" = "tags"."id";