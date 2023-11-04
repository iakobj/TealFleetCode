module.exports.tfdbSeed = `

INSERT INTO "roles" ("role_id", "role", "role_name")
VALUES
  ('1e2c561c-aaaa-4f79-9d3a-012345678901', 'rwd', 'user'),
  ('3b4d675e-aaaa-41a7-bc2a-012345678902', 'rw', 'limited-user'),
  ('5a6f7b8d-aaaa-2a1d-1f9a-012345678903', 'r', 'read-only');

INSERT INTO "tenants" ("tenant_id", "is_root", "tenant_name")
VALUES
  ('111c561c-8a1d-4f79-9d3a-012345678901', true, 'Root Tenant'),
  ('112d675e-6f8c-41a7-bc2a-012345678902', false, 'Demo Tenant 1'),
  ('113f7b8d-4c3e-2a1d-1f9a-012345678903', false, 'Demo Tenant 2');

INSERT INTO "sites" ("site_id", "tenant_id", "name", "address1", "city", "postcode", "country", "changed_at")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa', '111c561c-8a1d-4f79-9d3a-012345678901', 'Site 1', '123 Main St', 'City 1', 12345, 'Country 1', NOW()),
  ('2b3c4d5e-6f7a-8b9c-0d1e-0123456aaaab', '111c561c-8a1d-4f79-9d3a-012345678901', 'Site 2', '456 Elm St', 'City 2', 56789, 'Country 2', NOW());

INSERT INTO "users" ("user_id", "role_id", "tenant_id", "site_id", "first_name", "last_name", "email", "password", "phone", "title", "view_dashboard", "view_fleet", "view_support", "view_marketplace", "view_administration")
VALUES
  ('1a2b3c4d-1111-7a8b-9c0d-012345678901', '1e2c561c-aaaa-4f79-9d3a-012345678901', '111c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa', 'John', 'Doe', 'john@example.com', 'password123', '555-123-4567', 'Manager', true, true, true, true, true),
  ('2b3c4d5e-1112-8b9c-0d1e-012345678902', '1e2c561c-aaaa-4f79-9d3a-012345678901', '111c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa', 'Jane', 'Smith', 'jane@example.com', 'password456', '555-987-6543', 'Employee', true, true, true, true, true);


INSERT INTO "main_navigation" ("main_nav_id", "main_nav_item")
VALUES
  ('1a2b3c4d-7a8b-7a8b-9c0d-012345678881', 'Dashboard'),
  ('1a2b3c4d-7a8b-8b9c-0d1e-012345678882', 'Fleet'),
  ('1a2b3c4d-7a8b-9c0d-1e2a-012345678883', 'Support'),
  ('1a2b3c4d-7a8b-9c0d-1e2a-012345678884', 'Marketplace'),
  ('1a2b3c4d-7a8b-9c0d-1e2a-012345678885', 'Administration');


INSERT INTO "sub_navigation" ("sub_nav_id", "main_nav_id", "sub_nav_item")
VALUES
  ('1a2b3c4d-ffff-7a8b-9c0d-012345678901', '1a2b3c4d-7a8b-7a8b-9c0d-012345678881', 'Software'),
  ('2b3c4d5e-ffff-8b9c-0d1e-012345678902', '1a2b3c4d-7a8b-7a8b-9c0d-012345678881', 'Hardware'),
  ('2b3c4d5e-ffff-8b9c-0d2e-012345678883', '1a2b3c4d-7a8b-8b9c-0d1e-012345678882', 'All'),
  ('2b3c4d5e-ffff-8b9c-0d3e-012345678884', '1a2b3c4d-7a8b-8b9c-0d1e-012345678882', 'Cisco'),
  ('2b3c4d5e-ffff-8b9c-0d4e-012345678885', '1a2b3c4d-7a8b-8b9c-0d1e-012345678882', 'Dell'),
  ('2b3c4d5e-ffff-8b9c-0d5e-012345678886', '1a2b3c4d-7a8b-8b9c-0d1e-012345678882', 'VMware');

INSERT INTO "alerts_type" ("alert_type_id", "type")
VALUES
  ('1e2c561c-8a1d-4f79-9d3a-aaa345678901', 'Alert Type 1'),
  ('3b4d675e-6f8c-41a7-bc2a-aaa345678902', 'Alert Type 2');

INSERT INTO "alerts_category" ("alert_category_id", "category")
VALUES
  ('3b4d675e-6f8c-41a7-bc2a-bbb345678902', 'Alert Category 1'),
  ('5a6f7b8d-4c3e-2a1d-1f9a-bbb345678903', 'Alert Category 2');

INSERT INTO "sw_categories" ("sw_category_id", "category")
VALUES
  ('1e2c561c-1234-1234-1234-012345678901', 'SW Category 1'),
  ('3b4d675e-1234-1234-1234-012345678902', 'SW Category 2');


INSERT INTO "hw_categories" ("hw_category_id", "category")
VALUES
  ('3b4d675e-4321-4321-4321-012345678902', 'Category 1'),
  ('5a6f7b8d-4321-4321-4321-012345678903', 'Category 2');


INSERT INTO "vendors" ("vendor_id", "name", "image")
VALUES
  ('1a2b3c4d-8b8b-8b8b-8b8b-012345678901', 'Vendor 1', 'vendor1.jpg'),
  ('2b3c4d5e-8b8b-8b8b-8b8b-012345678902', 'Vendor 2', 'vendor2.jpg');

INSERT INTO "hardware_catalog" ("hardware_catalog_id", "vendor_id", "hw_category_id", "model_name", "part_number", "picture", "release_date", "end_of_life", "end_of_support", "changed_at")
VALUES
  ('1e21e21c-8a1d-4f79-9d3a-a11122678901', '1a2b3c4d-8b8b-8b8b-8b8b-012345678901', '3b4d675e-4321-4321-4321-012345678902', 'Hardware Model 1', 'H12345', 'hardware1.jpg', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('1e21e21c-6f8c-41a7-bc2a-a11122678902', '1a2b3c4d-8b8b-8b8b-8b8b-012345678901', '3b4d675e-4321-4321-4321-012345678902', 'Hardware Model 2', 'H67890', 'hardware2.jpg', '2022-02-01', '2024-02-01', '2024-12-31', NOW());
  
INSERT INTO "contract_types" ("contract_type_id", "type", "description")
VALUES
  ('1e2c561c-cccc-1111-cc11-012345678901', 'Contract Type 1', 'Contract Type Description 1'),
  ('3b4d675e-cccc-1111-cc12-012345678902', 'Contract Type 2', 'Contract Type Description 2');

INSERT INTO "alerts" ("alert_id", "tenant_id", "alert_type_id", "alert_category_id", "asset_id", "title", "description", "dismissed")
VALUES
  ('1a2b3c4d-aa11-7a8b-9c0d-012345678901', '111c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-8a1d-4f79-9d3a-aaa345678901', '3b4d675e-6f8c-41a7-bc2a-bbb345678902', '1a2b3c4d-5e6f-7777-9c0d-012345678901', 'Alert 1', 'Description of Alert 1', false),
  ('2b3c4d5e-aa11-8b9c-0d1e-012345678902', '111c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-8a1d-4f79-9d3a-aaa345678901', '3b4d675e-6f8c-41a7-bc2a-bbb345678902', '1a2b3c4d-5e6f-7777-9c0d-012345678901', 'Alert 2', 'Description of Alert 2', false);
  
INSERT INTO "hardware_assets" ("hardware_asset_id", "hardware_catalog_id", "hardware_asset_name", "tenant_id", "site_id", "serial_no", "changed_at")
VALUES
  ('1a2b3c4d-3333-7777-3c80-012345678901', '1e21e21c-8a1d-4f79-9d3a-a11122678901', 'superbigesxi01.acme.com', '111c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa', 'SN12345', NOW()),
  ('2b3c4d5e-3333-7777-3c80-012345678902', '1e21e21c-8a1d-4f79-9d3a-a11122678901', '192.168.1.12', '111c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa', 'SN67890', NOW());
  
INSERT INTO "logs" ("log_id", "user_id", "tenant_id", "type", "title", "log_description")
VALUES
  ('1a2b4444-5e6f-7a8b-9c0d-012345678901', '1a2b3c4d-1111-7a8b-9c0d-012345678901', '111c561c-8a1d-4f79-9d3a-012345678901', 'Log Type 1', 'Title Log 1', 'Description of Log 1'),
  ('2b3c4444-6f7a-8b9c-0d1e-012345678902', '1a2b3c4d-1111-7a8b-9c0d-012345678901', '111c561c-8a1d-4f79-9d3a-012345678901', 'Log Type 2', 'Title Log 2', 'Description of Log 2');


INSERT INTO "contracts" ("contract_id", "tenant_id", "contract_type_id", "contractor_name", "contract_no", "description", "valid_from", "valid_to", "changed_at")
VALUES
  ('1a2b3c4d-cccc-cccc-cccc-012345678901', '111c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-cccc-1111-cc11-012345678901', 'VMware', 'Contract123', 'Contract Description 1', '2023-01-01', '2023-12-31', NOW()),
  ('2b3c4d5e-cccc-cccc-cccc-012345678902', '111c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-cccc-1111-cc11-012345678901', 'MSP Guys', 'Contract456', 'Contract Description 2', '2023-02-01', '2023-11-30', NOW());

INSERT INTO "software_catalog" ("software_catalog_id", "vendor_id", "sw_category_id", "model_name", "version_number", "picture", "release_date", "end_of_life", "end_of_support", "changed_at")
VALUES
  ('1a2b3c4d-5e6f-caca-caca-000045678901', '1a2b3c4d-8b8b-8b8b-8b8b-012345678901', '1e2c561c-1234-1234-1234-012345678901', 'Software Model 1', '1.0', 'software1.jpg', '2022-01-01', '2024-01-01', '2024-12-31', NOW()),
  ('2b3c4d5e-6f7a-caca-caca-000045678902', '1a2b3c4d-8b8b-8b8b-8b8b-012345678901', '1e2c561c-1234-1234-1234-012345678901', 'Software Model 2', '2.0', 'software2.jpg', '2022-02-01', '2023-02-01', '2023-12-31', NOW());


INSERT INTO "software_assets" ("software_asset_id", "software_catalog_id", "hardware_asset_id", "software_asset_name", "tenant_id", "site_id", "changed_at")
VALUES
  ('1a2b3c4d-b8b8-a8a8-a1a8-012345678901', '1a2b3c4d-5e6f-caca-caca-000045678901', '1a2b3c4d-3333-7777-3c80-012345678901', 'hq-vrb01.acme.com', '111c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa', NOW()),
  ('2b3c4d5e-b8b8-a8a8-a1a8-012345678902', '1a2b3c4d-5e6f-caca-caca-000045678901', '1a2b3c4d-3333-7777-3c80-012345678901', 'hq-vcenter.acme.com','111c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa', NOW());

INSERT INTO "sw_asset_contracts" ("sw_asset_contract_id", "software_asset_id", "contract_id")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1a2b3c4d-b8b8-a8a8-a1a8-012345678901', '1a2b3c4d-cccc-cccc-cccc-012345678901'),
  ('2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '1a2b3c4d-b8b8-a8a8-a1a8-012345678901', '1a2b3c4d-cccc-cccc-cccc-012345678901');


INSERT INTO "hw_asset_contracts" ("hw_asset_contract_id", "hardware_asset_id", "contract_id")
VALUES
  ('1e2c561c-dddd-dddd-abcd-012345678901', '1a2b3c4d-3333-7777-3c80-012345678901', '1a2b3c4d-cccc-cccc-cccc-012345678901'),
  ('3b4d675e-dddd-dddd-abcd-012345678902', '1a2b3c4d-3333-7777-3c80-012345678901', '1a2b3c4d-cccc-cccc-cccc-012345678901');

`;
