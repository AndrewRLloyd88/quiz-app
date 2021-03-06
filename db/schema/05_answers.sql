-- Drop and recreate answers table (Example)

DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id                  SERIAL PRIMARY KEY NOT NULL,
  question_id         INTEGER,
  answer              TEXT NOT NULL,
  correct_answer      BOOLEAN,
  answer_explanation  VARCHAR(255),
  sort_order          INTEGER,
  img_url             TEXT,
  bg_image_url        TEXT,
  color               VARCHAR(40),
  user_id             INTEGER,
  active              BOOLEAN DEFAULT false
);
