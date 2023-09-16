module.exports.tfdb = `

CREATE TABLE IF NOT EXISTS "tenants" (
  "tenant_id" uuid PRIMARY KEY,
  "is_root" boolean NOT NULL,
  "tenant_name" varchar NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "users" (
  "user_id" uuid PRIMARY KEY,
  "role_id" uuid NOT NULL,
  "tenant_id" uuid NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "phone" varchar NOT NULL,
  "title" varchar,
  "view_dashboard" boolean NOT NULL,
  "view_fleet" boolean NOT NULL,
  "view_support" boolean NOT NULL,
  "view_marketplace" boolean NOT NULL,
  "view_administration" boolean NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "main_navigation" (
  "main_navigation_id" uuid PRIMARY KEY,
  "main_nav_item" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "sub_navigation" (
  "sub_navigation_id" uuid PRIMARY KEY,
  "main_nav_id" uuid NOT NULL,
  "sub_nav_item" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "roles" (
  "role_id" uuid PRIMARY KEY,
  "role" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "alerts" (
  "alert_id" uuid PRIMARY KEY,
  "tenant_id" uuid NOT NULL,
  "alert_type_id" uuid NOT NULL,
  "alert_category_id" uuid NOT NULL,
  "asset_id" uuid NOT NULL,
  "title" varchar NOT NULL,
  "description" varchar NOT NULL,
  "dismissed" boolean NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "alerts_type" (
  "alert_type_id" uuid PRIMARY KEY,
  "type" varchar
);

CREATE TABLE IF NOT EXISTS "alerts_category" (
  "alert_category_id" uuid PRIMARY KEY,
  "category" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "logs" (
  "log_id" uuid PRIMARY KEY,
  "user_id" uuid NOT NULL,
  "tenant_id" uuid NOT NULL,
  "type" varchar NOT NULL,
  "title" varchar NOT NULL,
  "log_description" varchar NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "contracts" (
  "contract_id" uuid PRIMARY KEY,
  "tenant_id" uuid NOT NULL,
  "contract_type_id" uuid NOT NULL,
  "contract_no" varchar NOT NULL,
  "description" text NOT NULL,
  "valid_from" date NOT NULL,
  "valid_to" date NOT NULL,
  "changed_at" timestamp NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "contract_types" (
  "contract_type_id" uuid PRIMARY KEY,
  "type" varchar NOT NULL,
  "description" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "software_list" (
  "software_list_id" uuid PRIMARY KEY,
  "vendor_id" uuid NOT NULL,
  "sw_category_id" uuid NOT NULL,
  "model_name" varchar NOT NULL,
  "version_number" varchar NOT NULL,
  "picture" varchar NOT NULL,
  "release_date" date NOT NULL,
  "end_of_life" date,
  "end_of_support" date,
  "changed_at" timestamp NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "software_assets" (
  "software_asset_id" uuid PRIMARY KEY,
  "software_list_id" uuid NOT NULL,
  "hardware_asset_id" uuid NOT NULL,
  "tenant_id" uuid NOT NULL,
  "site_id" uuid NOT NULL,
  "changed_at" timestamp NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "hardware_list" (
  "hardware_list_id" uuid PRIMARY KEY,
  "vendor_id" uuid NOT NULL,
  "hw_category_id" uuid NOT NULL,
  "model_name" varchar NOT NULL,
  "part_number" varchar NOT NULL,
  "picture" varchar NOT NULL,
  "release_date" date NOT NULL,
  "end_of_life" date,
  "end_of_support" date,
  "changed_at" timestamp NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "hardware_assets" (
  "hardware_asset_id" uuid PRIMARY KEY,
  "hardware_list_id" uuid NOT NULL,
  "tenant_id" uuid NOT NULL,
  "site_id" uuid NOT NULL,
  "serial_no" varchar NOT NULL,
  "changed_at" timestamp NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "sw_asset_contracts" (
  "sw_asset_contract_id" uuid PRIMARY KEY,
  "software_asset_id" uuid NOT NULL,
  "contract_id" uuid NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "hw_asset_contracts" (
  "hw_asset_contract_id" uuid PRIMARY KEY,
  "hardware_asset_id" uuid NOT NULL,
  "contract_id" uuid NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "sw_categories" (
  "sw_category_id" uuid PRIMARY KEY,
  "category" varchar NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "hw_categories" (
  "hw_category_id" uuid PRIMARY KEY,
  "category" varchar NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "vendors" (
  "vendor_id" uuid PRIMARY KEY,
  "name" varchar NOT NULL,
  "image" varchar NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "sites" (
  "site_id" uuid PRIMARY KEY,
  "tenant_id" uuid NOT NULL,
  "user_id" uuid NOT NULL,
  "asset_id" uuid NOT NULL,
  "name" varchar NOT NULL,
  "address1" varchar NOT NULL,
  "city" varchar NOT NULL,
  "postcode" integer NOT NULL,
  "country" varchar NOT NULL,
  "changed_at" timestamp NOT NULL,
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