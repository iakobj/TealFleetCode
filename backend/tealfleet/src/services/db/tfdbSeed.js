module.exports.tfdbSeed = `

INSERT INTO "roles" ("role_id", "role_type", "role_name")
VALUES
  ('00000000-aaaa-4f79-9d3a-012345678901', 'rwd', 'User'),
  ('00000000-aaaa-41a7-bc2a-012345678902', 'rw', 'Limited User'),
  ('00000000-aaaa-2a1d-1f9a-012345678903', 'r', 'Read Only');

INSERT INTO "tenants" ("tenant_id", "is_root", "tenant_name")
VALUES
  ('11111111-4cbb-2a1d-1f9a-012345678901', true, 'Integrated Innovations Center'),
  ('11111111-4cbb-2a1d-1f9a-012345678902', false, 'ByteTech'),
  ('11111111-4cbb-2a1d-1f9a-012345678903', false, 'EchoFinance'),
  ('11111111-4cbb-2a1d-1f9a-012345678904', false, 'Green Grow'),
  ('11111111-4cbb-2a1d-1f9a-012345678905', false, 'Innovate X'),
  ('11111111-4cbb-2a1d-1f9a-012345678906', false, 'Zen Hospitality'),
  ('11111111-4cbb-2a1d-1f9a-012345678907', false, 'Swift Transport'),
  ('11111111-4cbb-2a1d-1f9a-012345678908', false, 'BuildCo'),
  ('11111111-4cbb-2a1d-1f9a-012345678909', false, 'ShieldInsure'),
  ('11111111-4cbb-2a1d-1f9a-012345678910', false, 'Apex Consult'),
  ('11111111-4cbb-2a1d-1f9a-012345678911', false, 'Moonlight'),
  ('11111111-4cbb-2a1d-1f9a-012345678912', false, 'Nova Pharma'),
  ('11111111-4cbb-2a1d-1f9a-012345678913', false, 'Glacier Capital'),
  ('11111111-4cbb-2a1d-1f9a-012345678914', false, 'Vanguard Manufacturing Solutions'),
  ('11111111-4cbb-2a1d-1f9a-012345678915', false, 'Compass Travel Agency'),
  ('11111111-4cbb-2a1d-1f9a-012345678916', false, 'Solaris Energy Solution'),
  ('11111111-4cbb-2a1d-1f9a-012345678917', false, 'Transportation and Energy Department'),
  ('11111111-4cbb-2a1d-1f9a-012345678918', false, 'Public Health Organization'),
  ('11111111-4cbb-2a1d-1f9a-012345678919', false, 'Community Health Clinic'),
  ('11111111-4cbb-2a1d-1f9a-012345678920', false, 'ACME'),
  ('11111111-4cbb-2a1d-1f9a-012345678921', false, 'Vitality Wellness'),
  ('11111111-4cbb-2a1d-1f9a-012345678922', false, 'Sandy'),
  ('11111111-4cbb-2a1d-1f9a-012345678923', false, 'Benquick'),
  ('11111111-4cbb-2a1d-1f9a-012345678924', false, 'HealthLink Medical Group'),
  ('11111111-4cbb-2a1d-1f9a-012345678925', false, 'DriveWell Auto Services'),
  ('11111111-4cbb-2a1d-1f9a-012345678926', false, 'BuildCorp'),
  ('11111111-4cbb-2a1d-1f9a-012345678927', false, 'BlueChip Manufacturing'),
  ('11111111-4cbb-2a1d-1f9a-012345678928', false, 'DAXY'),
  ('11111111-4cbb-2a1d-1f9a-012345678929', false, 'Noche Inc.'),
  ('11111111-4cbb-2a1d-1f9a-012345678930', false, 'Precision Works Corporation'),
  ('11111111-4cbb-2a1d-1f9a-012345678931', false, 'Nova Care'),
  ('11111111-4cbb-2a1d-1f9a-012345678932', false, 'G.E.M');

INSERT INTO "sites" ("site_id", "tenant_id", "site_name", "site_address", "site_city", "site_postcode", "site_country", "site_changed_at")
VALUES
('22222222-cccc-2a1d-1f9a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678901' ,'MainDataCenter', '123 Main St', 'Brno', 12345, 'Czech Republic', NOW()),
('22222222-cccc-2a1d-1f9a-012345678902', '11111111-4cbb-2a1d-1f9a-012345678902' ,'BackupColo', '456 Elm St', 'Prague', 56789, 'Czech Republic', NOW()),
('22222222-cccc-2a1d-1f9a-012345678903', '11111111-4cbb-2a1d-1f9a-012345678903' ,'ParisHQ', '1 Avenue des Champs-Élysées', 'Paris', 75001, 'France', NOW()),
('22222222-cccc-2a1d-1f9a-012345678904', '11111111-4cbb-2a1d-1f9a-012345678904' ,'BerlinDataCenter', '25 Friedrichstraße', 'Berlin', 10115, 'Germany', NOW()),
('22222222-cccc-2a1d-1f9a-012345678905', '11111111-4cbb-2a1d-1f9a-012345678905' ,'LondonColo', '10 Downing Street', 'London', 4334, 'United Kingdom', NOW()),
('22222222-cccc-2a1d-1f9a-012345678906', '11111111-4cbb-2a1d-1f9a-012345678906' ,'AthensDR', '15 Syngrou Avenue', 'Athens', 10562, 'Greece', NOW()),
('22222222-cccc-2a1d-1f9a-012345678907', '11111111-4cbb-2a1d-1f9a-012345678907' ,'AmsterdamHQ', '10 Herengracht', 'Amsterdam', '1012', 'Netherlands', NOW()),
('22222222-cccc-2a1d-1f9a-012345678908', '11111111-4cbb-2a1d-1f9a-012345678908' ,'ViennaDataCenter', '5 Ringstraße', 'Vienna', 1010, 'Austria', NOW()),
('22222222-cccc-2a1d-1f9a-012345678909', '11111111-4cbb-2a1d-1f9a-012345678909' ,'BrusselsColo', '20 Grand Place', 'Brussels', 1000, 'Belgium', NOW()),
('22222222-cccc-2a1d-1f9a-012345678910', '11111111-4cbb-2a1d-1f9a-012345678910' ,'CopenhagenDR', '30 Nyhavn', 'Copenhagen', 1050, 'Denmark', NOW()),
('22222222-cccc-2a1d-1f9a-012345678911', '11111111-4cbb-2a1d-1f9a-012345678911' ,'StockholmHQ', '40 Gamla Stan', 'Stockholm', 11152, 'Sweden', NOW()),
('22222222-cccc-2a1d-1f9a-012345678912', '11111111-4cbb-2a1d-1f9a-012345678912' ,'OsloColo', '50 Karl Johans gate', 'Oslo', 0010, 'Norway', NOW()),
('22222222-cccc-2a1d-1f9a-012345678913', '11111111-4cbb-2a1d-1f9a-012345678913' ,'DublinDR', '20 Temple Bar', 'Dublin', '0010', 'Ireland', NOW()),
('22222222-cccc-2a1d-1f9a-012345678914', '11111111-4cbb-2a1d-1f9a-012345678914' ,'LisbonColo', '25 Rua Augusta', 'Lisbon', '1100', 'Portugal', NOW()),
('22222222-cccc-2a1d-1f9a-012345678915', '11111111-4cbb-2a1d-1f9a-012345678915' ,'HelsinkiHQ', '30 Esplanadi', 'Helsinki', '00100', 'Finland', NOW()),
('22222222-cccc-2a1d-1f9a-012345678916', '11111111-4cbb-2a1d-1f9a-012345678916' ,'BudapestDR', '10 Andrássy Avenue', 'Budapest', 1051, 'Hungary', NOW()),
('22222222-cccc-2a1d-1f9a-012345678917', '11111111-4cbb-2a1d-1f9a-012345678917' ,'WarsawDataCenter', '5 Plac Zamkowy', 'Warsaw', '00001', 'Poland', NOW()),
('22222222-cccc-2a1d-1f9a-012345678918', '11111111-4cbb-2a1d-1f9a-012345678918' ,'PragueHQ', '15 Staroměstské náměstí', 'Prague', '11000', 'Czech Republic', NOW()),
('22222222-cccc-2a1d-1f9a-012345678919', '11111111-4cbb-2a1d-1f9a-012345678919' ,'ViennaColo', '10 Schönbrunner Schloßstraße', 'Vienna', 1010, 'Austria', NOW()),
('22222222-cccc-2a1d-1f9a-012345678920', '11111111-4cbb-2a1d-1f9a-012345678920' ,'BratislavaDR', '5 Hviezdoslavovo námestie', 'Bratislava', '81101', 'Slovakia', NOW()),
('22222222-cccc-2a1d-1f9a-012345678921', '11111111-4cbb-2a1d-1f9a-012345678921' ,'BucharestHQ', '10 Calea Victoriei', 'Bucharest', '030167', 'Romania', NOW()),
('22222222-cccc-2a1d-1f9a-012345678922', '11111111-4cbb-2a1d-1f9a-012345678922' ,'SofiaColo', '15 Vitosha Boulevard', 'Sofia', 1000, 'Bulgaria', NOW()),
('22222222-cccc-2a1d-1f9a-012345678923', '11111111-4cbb-2a1d-1f9a-012345678923' ,'ZagrebSite', '20 Trg bana Josipa Jelačića', 'Zagreb', 10000, 'Croatia', NOW()),
('22222222-cccc-2a1d-1f9a-012345678924', '11111111-4cbb-2a1d-1f9a-012345678924' ,'BelgradeColo', '25 Knez Mihailova', 'Belgrade', '11000', 'Serbia', NOW()),
('22222222-cccc-2a1d-1f9a-012345678925', '11111111-4cbb-2a1d-1f9a-012345678925' ,'LjubljanaDR', '5 Prešernov trg', 'Ljubljana', 1000, 'Slovenia', NOW()),
('22222222-cccc-2a1d-1f9a-012345678926', '11111111-4cbb-2a1d-1f9a-012345678926' ,'TiranaHQ', '10 Skanderbeg Square', 'Tirana', '1001', 'Albania', NOW()),
('22222222-cccc-2a1d-1f9a-012345678927', '11111111-4cbb-2a1d-1f9a-012345678927' ,'PodgoricaColo', '15 Trg Republike', 'Podgorica', 81000, 'Montenegro', NOW()),
('22222222-cccc-2a1d-1f9a-012345678928', '11111111-4cbb-2a1d-1f9a-012345678928' ,'SkopjeSite', '20 Macedonia Square', 'Skopje', 1000, 'North Macedonia', NOW()),
('22222222-cccc-2a1d-1f9a-012345678929', '11111111-4cbb-2a1d-1f9a-012345678929' ,'ChisinauColo', '25 Piaţa Marii Adunări Naţionale', 'Chisinau', '2001', 'Moldova', NOW()),
('22222222-cccc-2a1d-1f9a-012345678930', '11111111-4cbb-2a1d-1f9a-012345678930', 'DublinDR', '20 Temple Bar', 'Dublin', '0010', 'Ireland', NOW()),
('22222222-cccc-2a1d-1f9a-012345678931', '11111111-4cbb-2a1d-1f9a-012345678931', 'LisbonColo', '25 Rua Augusta', 'Lisbon', '1100', 'Portugal', NOW()),
('22222222-cccc-2a1d-1f9a-012345678932', '11111111-4cbb-2a1d-1f9a-012345678932', 'HelsinkiHQ', '30 Esplanadi', 'Helsinki', '00100', 'Finland', NOW()),
('22222222-cccc-2a1d-1f9a-012345678933', '11111111-4cbb-2a1d-1f9a-012345678916', 'BudapestDR', '10 Andrássy Avenue', 'Budapest', 1051, 'Hungary', NOW()),
('22222222-cccc-2a1d-1f9a-012345678934', '11111111-4cbb-2a1d-1f9a-012345678917', 'WarsawDataCenter', '5 Plac Zamkowy', 'Warsaw', '00001', 'Poland', NOW()),
('22222222-cccc-2a1d-1f9a-012345678935', '11111111-4cbb-2a1d-1f9a-012345678918', 'PragueHQ', '15 Staroměstské náměstí', 'Prague', '11000', 'Czech Republic', NOW()),
('22222222-cccc-2a1d-1f9a-012345678936', '11111111-4cbb-2a1d-1f9a-012345678919', 'ViennaColo', '10 Schönbrunner Schloßstraße', 'Vienna', 1010, 'Austria', NOW()),
('22222222-cccc-2a1d-1f9a-012345678937', '11111111-4cbb-2a1d-1f9a-012345678920', 'BratislavaDR', '5 Hviezdoslavovo námestie', 'Bratislava', '81101', 'Slovakia', NOW());

INSERT INTO "users" ("user_id", "role_id", "tenant_id", "site_id", "first_name", "last_name", "email", "password", "phone", "title")
VALUES
  ('33333333-dddd-7777-8888-012345678901', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'John', 'Doe', 'john@iic.com', '8e14a20e90e76718e9845f96da4d99c6e4e71b3f04be4c1b74a0bdd0e894a385', '555-123-4567', 'Manager' ),
  ('33333333-dddd-7777-8888-012345678902', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'Jane', 'Smith', 'jane@ByteTech.com', '8e14a20e90e76718e9845f96da4d99c6e4e71b3f04be4c1b74a0bdd0e894a385', '555-987-6543', 'Network Engineer'),
  ('33333333-dddd-7777-8888-012345678903', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678903', '22222222-cccc-2a1d-1f9a-012345678903', 'Mia', 'Drew', 'Miad@EchoFinance.com', 'password456', '555-987-6543', 'Systems Engineer'),
  ('33333333-dddd-7777-8888-012345678904', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678904', '22222222-cccc-2a1d-1f9a-012345678904', 'Denisa', 'Doenberg', 'DenisaDoenberg@Green Grow.com', 'password123', '555-123-4567', 'Team Lead' ),
  ('33333333-dddd-7777-8888-012345678905', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678905', '22222222-cccc-2a1d-1f9a-012345678905', 'Mellisa', 'Starsky', 'Mellisa.Starsky@example.com', 'password456', '555-987-6543', 'Database Administrator'),
  ('33333333-dddd-7777-8888-012345678906', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678906', '22222222-cccc-2a1d-1f9a-012345678906', 'Drew', 'Smithovsky', 'Drew.Smithovsky@example.com', 'password456', '555-987-6543', 'DevOps Engineer'),
  ('33333333-dddd-7777-8888-012345678907', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678907', '22222222-cccc-2a1d-1f9a-012345678907', 'Eva', 'Johnson', 'eva@example.com', 'password789', '555-789-0123', 'Software Developer'),
  ('33333333-dddd-7777-8888-012345678908', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678908', '22222222-cccc-2a1d-1f9a-012345678908', 'Michael', 'Brown', 'michael@example.com', 'password321', '555-321-6789', 'IT Support Specialist'),
  ('33333333-dddd-7777-8888-012345678909', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678909', '22222222-cccc-2a1d-1f9a-012345678909', 'Sophia', 'Miller', 'sophia@example.com', 'password890', '555-890-1234', 'Quality Assurance Engineer'),
  ('33333333-dddd-7777-8888-012345678910', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678910', '22222222-cccc-2a1d-1f9a-012345678910', 'Daniel', 'Anderson', 'daniel@example.com', 'password567', '555-567-8901', 'Project Manager'),
  ('33333333-dddd-7777-8888-012345678911', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678911', '22222222-cccc-2a1d-1f9a-012345678911', 'Olivia', 'Garcia', 'olivia@example.com', 'password234', '555-234-5678', 'Business Analyst'),
  ('33333333-dddd-7777-8888-012345678912', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678912', '22222222-cccc-2a1d-1f9a-012345678912', 'Nathan', 'Martinez', 'nathan@example.com', 'password789', '555-789-0123', 'Software Engineer'),
  ('33333333-dddd-7777-8888-012345678913', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678913', '22222222-cccc-2a1d-1f9a-012345678913', 'Emily', 'Lee', 'emily@example.com', 'password321', '555-321-6789', 'Network Administrator'),
  ('33333333-dddd-7777-8888-012345678914', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678914', '22222222-cccc-2a1d-1f9a-012345678914', 'William', 'Clark', 'william@example.com', 'password890', '555-890-1234', 'Systems Analyst'),
  ('33333333-dddd-7777-8888-012345678915', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678915', '22222222-cccc-2a1d-1f9a-012345678915', 'Sophie', 'Harris', 'sophie@example.com', 'password567', '555-567-8901', 'Technical Support Specialist'),
  ('33333333-dddd-7777-8888-012345678916', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678916', '22222222-cccc-2a1d-1f9a-012345678916', 'Lucas', 'Taylor', 'lucas@example.com', 'password123', '555-123-4567', 'UX Designer'),
  ('33333333-dddd-7777-8888-012345678917', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678917', '22222222-cccc-2a1d-1f9a-012345678917', 'Ava', 'White', 'ava@example.com', 'password456', '555-987-6543', 'Frontend Developer'),
  ('33333333-dddd-7777-8888-012345678918', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678918', '22222222-cccc-2a1d-1f9a-012345678918', 'Henry', 'Hill', 'henry@example.com', 'password789', '555-789-0123', 'Backend Developer'),
  ('33333333-dddd-7777-8888-012345678919', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678919', '22222222-cccc-2a1d-1f9a-012345678919', 'Grace', 'Lewis', 'grace@example.com', 'password321', '555-321-6789', 'UI Designer'),
  ('33333333-dddd-7777-8888-012345678920', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678920', '22222222-cccc-2a1d-1f9a-012345678920', 'Oliver', 'Young', 'oliver@example.com', 'password654', '555-654-9870', 'Full Stack Developer'),
  ('33333333-dddd-7777-8888-012345678921', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678921', '22222222-cccc-2a1d-1f9a-012345678921', 'Chloe', 'Brown', 'chloe@example.com', 'password987', '555-987-3210', 'Software Architect'),
  ('33333333-dddd-7777-8888-012345678922', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678922', '22222222-cccc-2a1d-1f9a-012345678922', 'Liam', 'Thompson', 'liam@example.com', 'password210', '555-210-9876', 'Data Scientist'),
  ('33333333-dddd-7777-8888-012345678923', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678923', '22222222-cccc-2a1d-1f9a-012345678923', 'Emma', 'Evans', 'emma@example.com', 'password543', '555-543-2109', 'Machine Learning Engineer'),
  ('33333333-dddd-7777-8888-012345678924', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678924', '22222222-cccc-2a1d-1f9a-012345678924', 'Noah', 'Harrison', 'noah@example.com', 'password876', '555-876-5432', 'Cybersecurity Analyst'),
  ('33333333-dddd-7777-8888-012345678926', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678926', '22222222-cccc-2a1d-1f9a-012345678926', 'Harper', 'Miller', 'harper@example.com', 'password123', '555-123-4567', 'Cloud Solutions Architect'),
  ('33333333-dddd-7777-8888-012345678927', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678927', '22222222-cccc-2a1d-1f9a-012345678927', 'Logan', 'Turner', 'logan@example.com', 'password456', '555-987-6543', 'Business Intelligence Analyst'),
  ('33333333-dddd-7777-8888-012345678928', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678918', '22222222-cccc-2a1d-1f9a-012345678918', 'Evelyn', 'Ward', 'evelyn@example.com', 'password789', '555-789-0123', 'Technical Project Manager'),
  ('33333333-dddd-7777-8888-012345678929', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678919', '22222222-cccc-2a1d-1f9a-012345678919', 'Jack', 'Russell', 'jack@example.com', 'password321', '555-321-6789', 'Network Security Engineer'),
  ('33333333-dddd-7777-8888-012345678930', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678910', '22222222-cccc-2a1d-1f9a-012345678910', 'Aria', 'Coleman', 'aria@example.com', 'password654', '555-654-9870', 'Software Development Manager'),
  ('33333333-dddd-7777-8888-012345678931', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678911', '22222222-cccc-2a1d-1f9a-012345678911', 'Liam', 'Stewart', 'liam@example.com', 'password987', '555-987-3210', 'Database Architect'),
  ('33333333-dddd-7777-8888-012345678932', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678912', '22222222-cccc-2a1d-1f9a-012345678912', 'Avery', 'Parker', 'avery@example.com', 'password210', '555-210-9876', 'UI/UX Designer'),
  ('33333333-dddd-7777-8888-012345678933', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678913', '22222222-cccc-2a1d-1f9a-012345678913', 'Olivia', 'Hill', 'olivia@example.com', 'password543', '555-543-2109', 'Software Development Engineer'),
  ('33333333-dddd-7777-8888-012345678934', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678914', '22222222-cccc-2a1d-1f9a-012345678914', 'Ethan', 'Wright', 'ethan@example.com', 'password876', '555-876-5432', 'IT Manager'),
  ('33333333-dddd-7777-8888-012345678935', '00000000-aaaa-4f79-9d3a-012345678901', '11111111-4cbb-2a1d-1f9a-012345678915', '22222222-cccc-2a1d-1f9a-012345678915', 'Amelia', 'Young', 'amelia@example.com', 'password123', '555-123-4567', 'Data Analyst');
  
INSERT INTO "alerts_type" ("alert_type_id", "type")
VALUES
  ('44444444-aaaa-aaaa-aaaa-aaa345678901', 'Info'),
  ('44444444-aaaa-aaaa-aaaa-aaa345678902', 'Success'),
  ('44444444-aaaa-aaaa-aaaa-aaa345678903', 'Warning'),
  ('44444444-aaaa-aaaa-aaaa-aaa345678904', 'Danger');

INSERT INTO "vendors" ("vendor_id", "vendor_name", "vendor_image")
VALUES
  ('55555555-8b8b-8b8b-8b8b-012345678901', 'Cisco', 'cisco.jpg'),
  ('55555555-8b8b-8b8b-8b8b-012345678902', 'VMware', 'vmware.jpg'),
  ('55555555-8b8b-8b8b-8b8b-012345678903', 'Dell', 'dell.jpg'),
  ('55555555-8b8b-8b8b-8b8b-012345678904', 'Brocade', 'brocade.jpg'),
  ('55555555-8b8b-8b8b-8b8b-012345678905', 'Pure Storage', 'purestorage.jpg'),
  ('55555555-8b8b-8b8b-8b8b-012345678906', 'Palo Alto', 'paloalto.jpg'),
  ('55555555-8b8b-8b8b-8b8b-012345678907', 'Veeam', 'veeam.jpg'),
  ('55555555-8b8b-8b8b-8b8b-012345678908', 'Microsoft', 'microsoft.jpg'),
  ('55555555-8b8b-8b8b-8b8b-012345678909', 'Red Hat', 'redhat.jpg'),
  ('55555555-8b8b-8b8b-8b8b-012345678911', 'Lenovo', 'lenovo.jpg');

INSERT INTO "hardware_catalog" ("hardware_catalog_id", "vendor_id", "hardware_model_name", "hardware_part_number", "hardware_image", "hardware_release_date", "hardware_end_of_life", "hardware_end_of_support", "hardware_catalog_changed_at")
VALUES
  ('66666666-1234-5678-9999-a11122678901', '55555555-8b8b-8b8b-8b8b-012345678901', 'UCS C200 M7', 'UCSC-C200-M7', '/images/vendors/cisco/cisco-c220-m6-sff.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678902', '55555555-8b8b-8b8b-8b8b-012345678901', 'UCS C200 M6', 'UCSC-C200-M6', '/images/vendors/cisco/cisco-c220-m6-sff.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678903', '55555555-8b8b-8b8b-8b8b-012345678901', 'Catalyst 9200', 'C9200-24T', '/images/vendors/cisco/Nexus-9348GC-FX3.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678904', '55555555-8b8b-8b8b-8b8b-012345678901', 'Catalyst 9200', 'C9200-24P', '/images/vendors/cisco/Nexus-9348GC-FX3.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678905', '55555555-8b8b-8b8b-8b8b-012345678901', 'Catalyst 9300T', 'C9300X-48HX', '/images/vendors/cisco/Nexus-9348GC-FX3.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678906', '55555555-8b8b-8b8b-8b8b-012345678901', 'Catalyst 9300P', 'C9300X-24HX', '/images/vendors/cisco/Nexus-9348GC-FX3.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678907', '55555555-8b8b-8b8b-8b8b-012345678901', 'Nexus 9200', 'Nexus 9232E', '/images/vendors/cisco/Nexus-9348GC-FX3.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678908', '55555555-8b8b-8b8b-8b8b-012345678901', 'Nexus 9200', 'Nexus 92348GC-X ', '/images/vendors/cisco/Nexus-9348GC-FX3.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678909', '55555555-8b8b-8b8b-8b8b-012345678901', 'Nexus 9300', 'N9K-C93120TX', '/images/vendors/cisco/Nexus-9348GC-FX3.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678910', '55555555-8b8b-8b8b-8b8b-012345678901', 'Nexus 9300', 'N9K-C9348GC-FX3', '/images/vendors/cisco/Nexus-9348GC-FX3.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678911', '55555555-8b8b-8b8b-8b8b-012345678901', 'MDS 9100', '9148V', '/images/vendors/cisco/mds-9148V.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678912', '55555555-8b8b-8b8b-8b8b-012345678901', 'MDS 9100', '9124V', '/images/vendors/cisco/mds-9124V.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678915', '55555555-8b8b-8b8b-8b8b-012345678903', 'PowerEdge R750', 'R750', '/images/vendors/dell/r6415.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678918', '55555555-8b8b-8b8b-8b8b-012345678903', 'PowerEdge R450', 'R450', '/images/vendors/dell/r6415.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678919', '55555555-8b8b-8b8b-8b8b-012345678903', 'PowerEdge R550', 'R550', '/images/vendors/dell/r6415.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678925', '55555555-8b8b-8b8b-8b8b-012345678903', 'PowerStore 500T', 'PowerStore 500T', '/images/vendors/dell/dell-powerstore.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678928', '55555555-8b8b-8b8b-8b8b-012345678903', 'PowerStore 1200T', 'PowerStore 1200T', '/images/vendors/dell/dell-powerstore.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678929', '55555555-8b8b-8b8b-8b8b-012345678903', 'PowerStore 3200T', 'PowerStore 3200T', '/images/vendors/dell/dell-powerstore.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678930', '55555555-8b8b-8b8b-8b8b-012345678905', 'FA-X10R2', 'FA-X10R2', '/images/vendors/purestorage/fa-x.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678931', '55555555-8b8b-8b8b-8b8b-012345678905', 'FA-X10R3', 'FA-X10R3', '/images/vendors/purestorage/fa-x.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678932', '55555555-8b8b-8b8b-8b8b-012345678905', 'FA-X20R4', 'FA-X20R4', '/images/vendors/purestorage/fa-x.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678933', '55555555-8b8b-8b8b-8b8b-012345678905', 'FA-X50R3', 'FA-X50R3', '/images/vendors/purestorage/fa-x.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678942', '55555555-8b8b-8b8b-8b8b-012345678904', 'Brocade G630 Switch', 'Brocade G630 Switch', '/images/vendors/brocade/Brocade-G620-Switch.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678943', '55555555-8b8b-8b8b-8b8b-012345678904', 'Brocade G620 Switch', 'Brocade G620 Switch', '/images/vendors/brocade/Brocade-G620-Switch.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678952', '55555555-8b8b-8b8b-8b8b-012345678906', 'PA-5410', 'PA-5410', '/images/vendors/paloalto/PA-5410.png', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('66666666-1234-5678-9999-a11122678953', '55555555-8b8b-8b8b-8b8b-012345678906', 'PA-5420', 'PA-5420', '/images/vendors/paloalto/PA-5410.png', '2022-02-01', '2024-02-01', '2024-12-31', NOW());
  
INSERT INTO "contract_types" ("contract_type_id", "tenant_id", "type", "description")
VALUES
  ('77777777-cccc-1111-cc11-012345678901', '11111111-4cbb-2a1d-1f9a-012345678902', 'Regular Support', 'Support during bussiness hours'),
  ('77777777-cccc-1111-cc11-012345678902', '11111111-4cbb-2a1d-1f9a-012345678902', 'Non-Stop Support', 'Support 24/7/365'),
  ('77777777-cccc-1111-cc11-012345678903', '11111111-4cbb-2a1d-1f9a-012345678902', 'Break-Fix', 'Break Fix only'),
  ('77777777-cccc-1111-cc12-012345678904', '11111111-4cbb-2a1d-1f9a-012345678902', 'Support+', 'Maintenance and Support'),
  ('77777777-cccc-1111-cc11-012345678905', '11111111-4cbb-2a1d-1f9a-012345678901', 'Professional', 'Professional Services'),
  ('77777777-cccc-1111-cc12-012345678906', '11111111-4cbb-2a1d-1f9a-012345678901', 'Waranty', '1 year standard waranty'),
  ('77777777-cccc-1111-cc12-012345678907', '11111111-4cbb-2a1d-1f9a-012345678901', 'Extended Waranty', 'Extended Waranty');

INSERT INTO "alerts" ("alert_id", "tenant_id", "alert_type_id", "asset_id", "title", "description", "dismissed")
VALUES
  ('88888888-aa11-7a8b-9c0d-012345678901', '11111111-4cbb-2a1d-1f9a-012345678901', '44444444-aaaa-aaaa-aaaa-aaa345678901', '99999999-3333-7777-3c80-012345678901', 'Alert 1', 'Description of Alert 1', false),
  ('88888888-aa11-8b9c-0d1e-012345678902', '11111111-4cbb-2a1d-1f9a-012345678901', '44444444-aaaa-aaaa-aaaa-aaa345678901', '99999999-3333-7777-3c80-012345678901', 'Alert 2', 'Description of Alert 2', false);
  
INSERT INTO "hardware_assets" ("hardware_asset_id", "hardware_catalog_id", "hardware_asset_name", "tenant_id", "site_id", "hardware_serial_no", "hardware_changed_at")
VALUES
  ('99999999-3333-7777-3c80-012345678901', '66666666-1234-5678-9999-a11122678901', 'cimc-hq-01.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN12341', NOW()),
  ('99999999-3333-7777-3c80-012345678902', '66666666-1234-5678-9999-a11122678901', 'cimc-hq-02.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN67892', NOW()),
  ('99999999-3333-7777-3c80-012345678903', '66666666-1234-5678-9999-a11122678902', 'cimc-hq-03.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN12343', NOW()),
  ('99999999-3333-7777-3c80-012345678904', '66666666-1234-5678-9999-a11122678902', 'cimc-hq-04.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678905', '66666666-1234-5678-9999-a11122678901', 'cimc-dr-01.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN12341', NOW()),
  ('99999999-3333-7777-3c80-012345678906', '66666666-1234-5678-9999-a11122678901', 'cimc-dr-02.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN67892', NOW()),
  ('99999999-3333-7777-3c80-012345678907', '66666666-1234-5678-9999-a11122678902', 'cimc-dr-03.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN12343', NOW()),
  ('99999999-3333-7777-3c80-012345678908', '66666666-1234-5678-9999-a11122678902', 'cimc-dr-04.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678909', '66666666-1234-5678-9999-a11122678930', 'array-hq-01.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN12343', NOW()),
  ('99999999-3333-7777-3c80-012345678910', '66666666-1234-5678-9999-a11122678931', 'array-hq-02.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678911', '66666666-1234-5678-9999-a11122678925', 'powerstore-dr-01.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN12343', NOW()),
  ('99999999-3333-7777-3c80-012345678912', '66666666-1234-5678-9999-a11122678932', 'array-dr-01.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678913', '66666666-1234-5678-9999-a11122678915', 'idrac-hq-1.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678901', 'SN12343', NOW()),
  ('99999999-3333-7777-3c80-012345678914', '66666666-1234-5678-9999-a11122678915', 'idrac-hq-2.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678901', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678915', '66666666-1234-5678-9999-a11122678918', 'idrac-dr-1.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678901', 'SN12341', NOW()),
  ('99999999-3333-7777-3c80-012345678916', '66666666-1234-5678-9999-a11122678918', 'idrac-dr-2.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678901', 'SN67892', NOW()),
  ('99999999-3333-7777-3c80-012345678917', '66666666-1234-5678-9999-a11122678942', 'fc-hq-1.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN12343', NOW()),
  ('99999999-3333-7777-3c80-012345678918', '66666666-1234-5678-9999-a11122678942', 'fc-hq-2.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678919', '66666666-1234-5678-9999-a11122678943', 'fc-dr-1.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN12341', NOW()),
  ('99999999-3333-7777-3c80-012345678920', '66666666-1234-5678-9999-a11122678943', 'fc-dr-2.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67892', NOW()),
  ('99999999-3333-7777-3c80-012345678921', '66666666-1234-5678-9999-a11122678901', 'oob-main-01.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN12341', NOW()),
  ('99999999-3333-7777-3c80-012345678922', '66666666-1234-5678-9999-a11122678901', 'oob-main-02.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67892', NOW()),
  ('99999999-3333-7777-3c80-012345678923', '66666666-1234-5678-9999-a11122678902', 'oob-main-03.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN12343', NOW()),
  ('99999999-3333-7777-3c80-012345678924', '66666666-1234-5678-9999-a11122678902', 'oob-main-04.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678925', '66666666-1234-5678-9999-a11122678907', 'floor1-sw-01.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678926', '66666666-1234-5678-9999-a11122678907', 'floor1-sw-02.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678927', '66666666-1234-5678-9999-a11122678907', 'floor1-sw-03.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678928', '66666666-1234-5678-9999-a11122678907', 'floor1-sw-04.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678929', '66666666-1234-5678-9999-a11122678907', 'floor1-sw-05.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678930', '66666666-1234-5678-9999-a11122678907', 'floor1-sw-06.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678931', '66666666-1234-5678-9999-a11122678907', 'floor2-sw-01.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678932', '66666666-1234-5678-9999-a11122678907', 'floor2-sw-02.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678933', '66666666-1234-5678-9999-a11122678907', 'floor2-sw-03.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678934', '66666666-1234-5678-9999-a11122678907', 'floor2-sw-04.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678935', '66666666-1234-5678-9999-a11122678907', 'floor2-sw-05.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW()),
  ('99999999-3333-7777-3c80-012345678936', '66666666-1234-5678-9999-a11122678907', 'floor2-sw-06.ByteTech.com', '11111111-4cbb-2a1d-1f9a-012345678902', '22222222-cccc-2a1d-1f9a-012345678902', 'SN67894', NOW());

INSERT INTO "logs" ("log_id", "user_id", "tenant_id", "type", "title", "log_description")
VALUES
  ('aaaaaaaa-5e6f-7a8b-9c0d-012345678901', '33333333-dddd-7777-8888-012345678901', '11111111-4cbb-2a1d-1f9a-012345678901', 'Log Type 1', 'Title Log 1', 'Description of Log 1'),
  ('aaaaaaaa-6f7a-8b9c-0d1e-012345678902', '33333333-dddd-7777-8888-012345678901', '11111111-4cbb-2a1d-1f9a-012345678901', 'Log Type 2', 'Title Log 2', 'Description of Log 2');

INSERT INTO "contracts" ("contract_id", "tenant_id", "contract_type_id", "contractor_name", "contract_sla", "contract_no", "contract_description", "contract_valid_from", "contract_valid_to", "contract_changed_at")
VALUES
  ('bbbbbbbb-cccc-cccc-cccc-012345678901', '11111111-4cbb-2a1d-1f9a-012345678901', '77777777-cccc-1111-cc11-012345678901', 'Cisco', '8x5', 'WON43173645', 'Contract Description 1', '2023-01-01', '2023-12-31', NOW()),
  ('bbbbbbbb-cccc-cccc-cccc-012345678902', '11111111-4cbb-2a1d-1f9a-012345678901', '77777777-cccc-1111-cc11-012345678901', 'Pure Storage', '24/7/365', 'PO-76263-9353', 'Contract Description 2', '2023-02-01', '2023-11-30', NOW());

INSERT INTO "software_catalog" ("software_catalog_id", "vendor_id", "software_model_name", "software_version_number", "software_image", "software_release_date", "software_end_of_life", "software_end_of_support", "software_catalog_changed_at")
VALUES
  ('cccccccc-6f7a-caca-caca-000045678901', '55555555-8b8b-8b8b-8b8b-012345678902', 'vCenter', '8.0.1', '/images/vendors/vmware/vmware-vcenter.jpg', '2022-01-01', '2024-01-01', '2024-12-31', NOW()),
  ('cccccccc-6f7a-caca-caca-000045678902', '55555555-8b8b-8b8b-8b8b-012345678902', 'ESXi', '8.0.2', '/images/vendors/vmware/vmware-vcenter.jpg', '2022-02-01', '2023-02-01', '2023-12-31', NOW()),
  ('cccccccc-6f7a-caca-caca-000045678903', '55555555-8b8b-8b8b-8b8b-012345678902', 'ESXi', '8.0.1', '/images/vendors/vmware/vmware-vcenter.jpg', '2022-02-01', '2023-02-01', '2023-12-31', NOW()),
  ('cccccccc-6f7a-caca-caca-000045678904', '55555555-8b8b-8b8b-8b8b-012345678902', 'ESXi', '7.0.3', '/images/vendors/vmware/vmware-vcenter.jpg', '2022-02-01', '2023-02-01', '2023-12-31', NOW()),
  ('cccccccc-6f7a-caca-caca-000045678905', '55555555-8b8b-8b8b-8b8b-012345678907', 'Veeam Backup & Replication', '12.0', '/images/vendors/veeam/veeam.png', '2022-02-01', '2023-02-01', '2023-12-31', NOW());

INSERT INTO "software_assets" ("software_asset_id", "software_catalog_id", "hardware_asset_id", "software_asset_name", "tenant_id", "site_id", "software_changed_at")
VALUES
  ('dddddddd-b8b8-a8a8-a1a8-012345678901', 'cccccccc-6f7a-caca-caca-000045678901', '99999999-3333-7777-3c80-012345678901', 'vc-hq1.iic.com', '11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', NOW()),
  ('dddddddd-b8b8-a8a8-a1a8-012345678902', 'cccccccc-6f7a-caca-caca-000045678901', '99999999-3333-7777-3c80-012345678901', 'vc-dr1.iic.com','11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', NOW()),
  ('dddddddd-b8b8-a8a8-a1a8-012345678903', 'cccccccc-6f7a-caca-caca-000045678902', '99999999-3333-7777-3c80-012345678902', 'hq-esxi01.iic.com','11111111-4cbb-2a1d-1f9a-012345678901', '22222222-cccc-2a1d-1f9a-012345678901', NOW());

INSERT INTO "sw_asset_contracts" ("sw_asset_contract_id", "software_asset_id", "contract_id")
VALUES
  ('aaaa1111-5e6f-7a8b-9c0d-012345678901', 'dddddddd-b8b8-a8a8-a1a8-012345678901', 'bbbbbbbb-cccc-cccc-cccc-012345678902'),
  ('aaaa1111-5e6f-7a8b-9c0d-012345678902', 'dddddddd-b8b8-a8a8-a1a8-012345678902', 'bbbbbbbb-cccc-cccc-cccc-012345678902'),
  ('aaaa1111-5e6f-7a8b-9c0d-012345678903', 'dddddddd-b8b8-a8a8-a1a8-012345678903', 'bbbbbbbb-cccc-cccc-cccc-012345678902');

INSERT INTO "hw_asset_contracts" ("hw_asset_contract_id", "hardware_asset_id", "contract_id")
VALUES
  ('bbbb1111-dddd-dddd-abcd-012345678901', '99999999-3333-7777-3c80-012345678901', 'bbbbbbbb-cccc-cccc-cccc-012345678901'),
  ('bbbb1111-dddd-dddd-abcd-012345678902', '99999999-3333-7777-3c80-012345678902', 'bbbbbbbb-cccc-cccc-cccc-012345678901'),
  ('bbbb1111-dddd-dddd-abcd-012345678903', '99999999-3333-7777-3c80-012345678903', 'bbbbbbbb-cccc-cccc-cccc-012345678901'),
  ('bbbb1111-dddd-dddd-abcd-012345678904', '99999999-3333-7777-3c80-012345678904', 'bbbbbbbb-cccc-cccc-cccc-012345678901'),
  ('bbbb1111-dddd-dddd-abcd-012345678905', '99999999-3333-7777-3c80-012345678905', 'bbbbbbbb-cccc-cccc-cccc-012345678901'),
  ('bbbb1111-dddd-dddd-abcd-012345678906', '99999999-3333-7777-3c80-012345678906', 'bbbbbbbb-cccc-cccc-cccc-012345678901');
`;
