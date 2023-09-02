module.exports.tfdb = `

CREATE TABLE "tenants" (
  "tenant_id" uuid PRIMARY KEY,
  "is_root" boolean,
  "tenant_name" varchar,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "users" (
  "user_id" uuid PRIMARY KEY,
  "role_id" uuid,
  "tenant_id" uuid,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar,
  "password" varchar,
  "phone" varchar,
  "title" varchar,
  "view_dashboard" boolean,
  "view_fleet" boolean,
  "view_support" boolean,
  "view_marketplace" boolean,
  "view_administration" boolean,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "main_navigation" (
  "main_navigation_id" uuid PRIMARY KEY,
  "main_nav_item" varchar
);

CREATE TABLE "sub_navigation" (
  "sub_navigation_id" uuid PRIMARY KEY,
  "main_nav_id" uuid,
  "sub_nav_item" varchar
);

CREATE TABLE "roles" (
  "role_id" uuid PRIMARY KEY,
  "role" varchar
);

CREATE TABLE "alerts" (
  "alert_id" uuid PRIMARY KEY,
  "tenant_id" uuid,
  "alert_type_id" uuid,
  "alert_category_id" uuid,
  "asset_id" uuid,
  "title" varchar,
  "description" varchar,
  "dismissed" boolean,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "alerts_type" (
  "alert_type_id" uuid PRIMARY KEY,
  "type" varchar
);

CREATE TABLE "alerts_category" (
  "alert_category_id" uuid PRIMARY KEY,
  "category" varchar
);

CREATE TABLE "logs" (
  "log_id" uuid PRIMARY KEY,
  "user_id" uuid,
  "tenant_id" uuid,
  "type" varchar,
  "title" varchar,
  "log_description" varchar,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "contracts" (
  "contract_id" uuid PRIMARY KEY,
  "tenant_id" uuid,
  "contract_type_id" uuid,
  "contract_no" varchar,
  "description" text,
  "valid_from" date,
  "valid_to" date,
  "changed_at" timestamp,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "contract_types" (
  "contract_type_id" uuid PRIMARY KEY,
  "type" varchar,
  "description" text,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "software_list" (
  "software_list_id" uuid PRIMARY KEY,
  "vendor_id" uuid,
  "sw_category_id" uuid,
  "model_name" varchar,
  "version_number" varchar,
  "picture" varchar,
  "release_date" date,
  "end_of_life" date,
  "end_of_support" date,
  "changed_at" timestamp,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "software_assets" (
  "software_asset_id" uuid PRIMARY KEY,
  "software_list_id" uuid,
  "hardware_asset_id" uuid,
  "tenant_id" uuid,
  "site_id" uuid,
  "changed_at" timestamp,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "hardware_list" (
  "hardware_list_id" uuid PRIMARY KEY,
  "vendor_id" uuid,
  "hw_category_id" uuid,
  "model_name" varchar,
  "part_number" varchar,
  "picture" varchar,
  "release_date" date,
  "end_of_life" date,
  "end_of_support" date,
  "changed_at" timestamp,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "hardware_assets" (
  "hardware_asset_id" uuid PRIMARY KEY,
  "hardware_list_id" uuid,
  "tenant_id" uuid,
  "site_id" uuid,
  "serial_no" varchar,
  "changed_at" timestamp,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "sw_asset_contracts" (
  "sw_asset_contract_id" uuid PRIMARY KEY,
  "software_asset_id" uuid,
  "contract_id" uuid,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "hw_asset_contracts" (
  "hw_asset_contract_id" uuid PRIMARY KEY,
  "hardware_asset_id" uuid,
  "contract_id" uuid,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "sw_categories" (
  "sw_category_id" uuid PRIMARY KEY,
  "category" varchar,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "hw_categories" (
  "hw_category_id" uuid PRIMARY KEY,
  "category" varchar,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "vendors" (
  "vendor_id" uuid PRIMARY KEY,
  "name" varchar,
  "image" varchar,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "sites" (
  "site_id" uuid PRIMARY KEY,
  "tenant_id" uuid,
  "user_id" uuid,
  "asset_id" uuid,
  "name" varchar,
  "address1" varchar,
  "city" varchar,
  "postcode" integer,
  "country" varchar,
  "changed_at" timestamp,
  "created_at" timestamp DEFAULT (now())
);

ALTER TABLE "logs" ADD FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "alerts" ADD FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "users" ADD FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "contracts" ADD FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "sites" ADD FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "logs" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "sites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "users" ADD FOREIGN KEY ("role_id") REFERENCES "roles" ("role_id");

ALTER TABLE "alerts" ADD FOREIGN KEY ("alert_type_id") REFERENCES "alerts_type" ("alert_type_id");

ALTER TABLE "alerts" ADD FOREIGN KEY ("alert_category_id") REFERENCES "alerts_category" ("alert_category_id");

ALTER TABLE "contracts" ADD FOREIGN KEY ("contract_type_id") REFERENCES "contract_types" ("contract_type_id");

ALTER TABLE "sub_navigation" ADD FOREIGN KEY ("main_nav_id") REFERENCES "main_navigation" ("main_navigation_id");

ALTER TABLE "software_assets" ADD FOREIGN KEY ("software_list_id") REFERENCES "software_list" ("software_list_id");

ALTER TABLE "software_assets" ADD FOREIGN KEY ("hardware_asset_id") REFERENCES "hardware_assets" ("hardware_asset_id");

ALTER TABLE "software_assets" ADD FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "software_assets" ADD FOREIGN KEY ("site_id") REFERENCES "sites" ("site_id");

ALTER TABLE "software_list" ADD FOREIGN KEY ("sw_category_id") REFERENCES "sw_categories" ("sw_category_id");

ALTER TABLE "software_list" ADD FOREIGN KEY ("vendor_id") REFERENCES "vendors" ("vendor_id");

ALTER TABLE "hardware_assets" ADD FOREIGN KEY ("hardware_list_id") REFERENCES "hardware_list" ("hardware_list_id");

ALTER TABLE "hardware_assets" ADD FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "hardware_assets" ADD FOREIGN KEY ("site_id") REFERENCES "sites" ("site_id");

ALTER TABLE "hardware_list" ADD FOREIGN KEY ("vendor_id") REFERENCES "vendors" ("vendor_id");

ALTER TABLE "hardware_list" ADD FOREIGN KEY ("hw_category_id") REFERENCES "hw_categories" ("hw_category_id");

ALTER TABLE "sw_asset_contracts" ADD FOREIGN KEY ("contract_id") REFERENCES "contracts" ("contract_id");

ALTER TABLE "sw_asset_contracts" ADD FOREIGN KEY ("software_asset_id") REFERENCES "software_assets" ("software_asset_id");

ALTER TABLE "hw_asset_contracts" ADD FOREIGN KEY ("contract_id") REFERENCES "contracts" ("contract_id");

ALTER TABLE "hw_asset_contracts" ADD FOREIGN KEY ("hardware_asset_id") REFERENCES "hardware_assets" ("hardware_asset_id");

`;