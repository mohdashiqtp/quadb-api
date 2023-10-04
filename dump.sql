--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ExampleModels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ExampleModels" (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."ExampleModels" OWNER TO postgres;

--
-- Name: ExampleModels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ExampleModels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ExampleModels_id_seq" OWNER TO postgres;

--
-- Name: ExampleModels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ExampleModels_id_seq" OWNED BY public."ExampleModels".id;


--
-- Name: UserModels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UserModels" (
    user_id uuid NOT NULL,
    user_name character varying(255) NOT NULL,
    user_email character varying(255) NOT NULL,
    user_password character varying(255) NOT NULL,
    user_image character varying(255),
    total_orders integer DEFAULT 0,
    created_at timestamp with time zone,
    last_logged_in timestamp with time zone
);


ALTER TABLE public."UserModels" OWNER TO postgres;

--
-- Name: ExampleModels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ExampleModels" ALTER COLUMN id SET DEFAULT nextval('public."ExampleModels_id_seq"'::regclass);


--
-- Data for Name: ExampleModels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ExampleModels" (id, name, email, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: UserModels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UserModels" (user_id, user_name, user_email, user_password, user_image, total_orders, created_at, last_logged_in) FROM stdin;
c07bf567-f756-4b6b-b433-1f8dc3ff4a62	JohnDoe	johndoe@example.com	hashed_password_here	\N	0	2023-10-03 21:36:15.868+05:30	\N
ea5a44af-c815-4856-a8b3-1857612c9f9f	 ashik	ashuqmuhammed79@gmail.com	ss	sis	12	2023-10-04 12:39:59.451+05:30	\N
76d203f2-8cc8-44bf-ab98-37ed6505ef0c	 ashik	ashuqmuhakksn	sis	jjd	10	2023-10-04 13:08:55.71+05:30	\N
b842c081-0685-4cf6-93cb-02e1592284ec	 ashik	ashuqmuhakksnkwkkw	sis	jjd	10	2023-10-04 13:41:06.012+05:30	\N
b006f4da-e1a0-4791-a4d7-202f41860567	 ashik	ashuqmuhakkkksnkwkkw	sis	jjd	10	2023-10-04 13:54:26.366+05:30	\N
7db10379-835e-4ca0-8f11-359320201a84	 ashik	ashuqmuhakkkjjhgksnkwkkw	sis	jjd	10	2023-10-04 14:00:47.921+05:30	\N
527180c6-88fb-4c32-b837-1d92365c5b44	 ashik	ashuqmuhakkkjjhgksneeekwkkw	sis	jjd	10	2023-10-04 14:02:09.718+05:30	\N
c71ff03c-66a0-4fc2-b221-7512bac12a34	 ashik	ashuqmuhakkkjjhgkkksneeekwkkw	sis	jjd	10	2023-10-04 14:03:01.725+05:30	\N
5f1eabe5-8280-49a8-b978-1fdadb706d5d	 ashik	ashuqmullhakkkjjhgkkksneeekwkkw	sis	jjd	10	2023-10-04 14:04:08.433+05:30	\N
3e5c55da-5e6a-46a9-a7c5-9917ca8a58a8	 ashik	ashuqmullhakkksssjjhgkkkkhksneeekwkkw	sis	jjd	10	2023-10-04 14:05:34.668+05:30	\N
\.


--
-- Name: ExampleModels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ExampleModels_id_seq"', 1, false);


--
-- Name: ExampleModels ExampleModels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ExampleModels"
    ADD CONSTRAINT "ExampleModels_pkey" PRIMARY KEY (id);


--
-- Name: UserModels UserModels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserModels"
    ADD CONSTRAINT "UserModels_pkey" PRIMARY KEY (user_id);


--
-- Name: UserModels UserModels_user_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserModels"
    ADD CONSTRAINT "UserModels_user_email_key" UNIQUE (user_email);


--
-- PostgreSQL database dump complete
--

