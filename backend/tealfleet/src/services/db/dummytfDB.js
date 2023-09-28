module.exports.dummytfdb = `



INSERT INTO "tenants" ("tenant_id", "is_root", "tenant_name")
VALUES
  ('111c561c-8a1d-4f79-9d3a-012345678901', true, 'Root Tenant'),
  ('112d675e-6f8c-41a7-bc2a-012345678902', false, 'Demo Tenant 1'),
  ('113f7b8d-4c3e-2a1d-1f9a-012345678903', false, 'Demo Tenant 2');


INSERT INTO "users" ("user_id", "role_id", "tenant_id", "first_name", "last_name", "email", "password", "phone", "title", "view_dashboard", "view_fleet", "view_support", "view_marketplace", "view_administration")
VALUES
  ('1a2b3c4d-1111-7a8b-9c0d-012345678901', '111c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', 'John', 'Doe', 'john@example.com', 'password123', '555-123-4567', 'Manager', true, true, true, true, true),
  ('2b3c4d5e-1112-8b9c-0d1e-012345678902', '111c561c-8a1d-4f79-9d3a-012345678901', '111c561c-8a1d-4f79-9d3a-012345678901', 'Jane', 'Smith', 'jane@example.com', 'password456', '555-987-6543', 'Employee', true, false, true, false, false);


INSERT INTO "main_navigation" ("main_nav_id", "main_nav_item")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-012345678881', 'Dashboard'),
  ('2b3c4d5e-6f7a-8b9c-0d1e-012345678882', 'Fleet'),
  ('3c4d5e6f-7a8b-9c0d-1e2a-012345678883', 'Support');
  ('3c4d5e6f-7a8b-9c0d-1e2a-012345678884', 'Marketplace');
  ('3c4d5e6f-7a8b-9c0d-1e2a-012345678885', 'Administration');


INSERT INTO "sub_navigation" ("sub_nav_id", "main_nav_id", "sub_nav_item")
VALUES
  ('1a2b3c4d-ffff-7a8b-9c0d-012345678901', '2b3c4d5e-6f7a-8b9c-0d1e-012345678881', 'Software'),
  ('2b3c4d5e-ffff-8b9c-0d1e-012345678902', '2b3c4d5e-6f7a-8b9c-0d1e-012345678881', 'Hardware'),
  ('2b3c4d5e-ffff-8b9c-0d2e-012345678883', '2b3c4d5e-6f7a-8b9c-0d1e-012345678882', 'All'),
  ('2b3c4d5e-ffff-8b9c-0d3e-012345678884', '2b3c4d5e-6f7a-8b9c-0d1e-012345678882', 'Cisco'),
  ('2b3c4d5e-ffff-8b9c-0d4e-012345678885', '2b3c4d5e-6f7a-8b9c-0d1e-012345678882', 'Dell'),
  ('2b3c4d5e-ffff-8b9c-0d5e-012345678886', '2b3c4d5e-6f7a-8b9c-0d1e-012345678882', 'VMware'),


INSERT INTO "roles" ("role_id", "role")
VALUES
  ('1e2c561c-aaaa-4f79-9d3a-012345678901', 'Admin'),
  ('3b4d675e-aaaa-41a7-bc2a-012345678902', 'Manager'),
  ('5a6f7b8d-aaaa-2a1d-1f9a-012345678903', 'Employee');


INSERT INTO "alerts" ("alert_id", "tenant_id", "alert_type_id", "alert_category_id", "asset_id", "title", "description", "dismissed")
VALUES
  ('1a2b3c4d-aa11-7a8b-9c0d-012345678901', '111c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-8a1d-4f79-9d3a-aaa345678901', '3b4d675e-6f8c-41a7-bc2a-012345678902', 'Asset123', 'Alert 1', 'Description of Alert 1', false),
  ('2b3c4d5e-aa11-8b9c-0d1e-012345678902', '111c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-8a1d-4f79-9d3a-aaa345678901', '5a6f7b8d-4c3e-2a1d-1f9a-012345678903', 'Asset456', 'Alert 2', 'Description of Alert 2', false);


INSERT INTO "alerts_type" ("alert_type_id", "type")
VALUES
  ('1e2c561c-8a1d-4f79-9d3a-aaa345678901', 'Type 1'),
  ('3b4d675e-6f8c-41a7-bc2a-aaa345678902', 'Type 2');


INSERT INTO "alerts_category" ("alert_category_id", "category")
VALUES
  ('3b4d675e-6f8c-41a7-bc2a-012345678902', 'Category 1'),
  ('5a6f7b8d-4c3e-2a1d-1f9a-012345678903', 'Category 2');


INSERT INTO "logs" ("log_id", "user_id", "tenant_id", "type", "title", "log_description")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', 'Type 1', 'Log 1', 'Description of Log 1'),
  ('2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', 'Type 2', 'Log 2', 'Description of Log 2');


INSERT INTO "contracts" ("contract_id", "tenant_id", "contract_type_id", "contract_no", "description", "valid_from", "valid_to", "changed_at")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', 'Contract123', 'Contract Description 1', '2023-01-01', '2023-12-31', NOW()),
  ('2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', 'Contract456', 'Contract Description 2', '2023-02-01', '2023-11-30', NOW());


INSERT INTO "contract_types" ("contract_type_id", "type", "description")
VALUES
  ('1e2c561c-8a1d-4f79-9d3a-012345678901', 'Type 1', 'Contract Type Description 1'),
  ('3b4d675e-6f8c-41a7-bc2a-012345678902', 'Type 2', 'Contract Type Description 2');


INSERT INTO "software_catalog" ("software_catalog_id", "vendor_id", "sw_category_id", "model_name", "version_number", "picture", "release_date", "end_of_life", "end_of_support", "changed_at")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', 'Software Model 1', '1.0', 'software1.jpg', '2022-01-01', '2024-01-01', '2024-12-31', NOW()),
  ('2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', 'Software Model 2', '2.0', 'software2.jpg', '2022-02-01', '2023-02-01', '2023-12-31', NOW());


INSERT INTO "software_assets" ("software_asset_id", "software_catalog_id", "hardware_asset_id", "tenant_id", "site_id", "changed_at")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-012345678901', NOW()),
  ('2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', '2b3c4d5e-6f7a-8b9c-0d1e-012345678902', NOW());


INSERT INTO "hardware_catalog" ("hardware_catalog_id", "vendor_id", "hw_category_id", "model_name", "part_number", "picture", "release_date", "end_of_life", "end_of_support", "changed_at")
VALUES
  ('1e2c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', 'Hardware Model 1', 'H12345', 'hardware1.jpg', '2022-01-01', '2025-01-01', '2025-12-31', NOW()),
  ('3b4d675e-6f8c-41a7-bc2a-012345678902', '2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', 'Hardware Model 2', 'H67890', 'hardware2.jpg', '2022-02-01', '2024-02-01', '2024-12-31', NOW());


INSERT INTO "hardware_assets" ("hardware_asset_id", "hardware_catalog_id", "tenant_id", "site_id", "serial_no", "changed_at")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-012345678901', 'SN12345', NOW()),
  ('2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', '2b3c4d5e-6f7a-8b9c-0d1e-012345678902', 'SN67890', NOW());


INSERT INTO "sw_asset_contracts" ("sw_asset_contract_id", "software_asset_id", "contract_id")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901'),
  ('2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902');


INSERT INTO "hw_asset_contracts" ("hw_asset_contract_id", "hardware_asset_id", "contract_id")
VALUES
  ('1e2c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901'),
  ('3b4d675e-6f8c-41a7-bc2a-012345678902', '2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902');


INSERT INTO "sw_categories" ("sw_category_id", "category")
VALUES
  ('1e2c561c-8a1d-4f79-9d3a-012345678901', 'Category 1'),
  ('3b4d675e-6f8c-41a7-bc2a-012345678902', 'Category 2');


INSERT INTO "hw_categories" ("hw_category_id", "category")
VALUES
  ('3b4d675e-6f8c-41a7-bc2a-012345678902', 'Category 1'),
  ('5a6f7b8d-4c3e-2a1d-1f9a-012345678903', 'Category 2');


INSERT INTO "vendors" ("vendor_id", "name", "image")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-012345678901', 'Vendor 1', 'vendor1.jpg'),
  ('2b3c4d5e-6f7a-8b9c-0d1e-012345678902', 'Vendor 2', 'vendor2.jpg');


INSERT INTO "sites" ("site_id", "tenant_id", "user_id", "asset_id", "name", "address1", "city", "postcode", "country", "changed_at")
VALUES
  ('1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', '1a2b3c4d-5e6f-7a8b-9c0d-012345678901', '1e2c561c-8a1d-4f79-9d3a-012345678901', 'Site 1', '123 Main St', 'City 1', 12345, 'Country 1', NOW()),
  ('2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', '2b3c4d5e-6f7a-8b9c-0d1e-012345678902', '3b4d675e-6f8c-41a7-bc2a-012345678902', 'Site 2', '456 Elm St', 'City 2', 56789, 'Country 2', NOW());

`;
