module.exports.tfdbInit = `

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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
  "site_id" uuid NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "phone" varchar NOT NULL,
  "title" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "roles" (
  "role_id" uuid PRIMARY KEY,
  "role_type" varchar NOT NULL,
  "role_name" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "alerts" (
  "alert_id" uuid PRIMARY KEY,
  "tenant_id" uuid NOT NULL,
  "alert_type_id" uuid NOT NULL,
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
  "contractor_name" text NOT NULL,
  "contract_sla" varchar,
  "contract_no" varchar NOT NULL UNIQUE,
  "contract_description" text,
  "contract_valid_from" date NOT NULL,
  "contract_valid_to" date NOT NULL,
  "contract_changed_at" timestamp NOT NULL,
  "contract_created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "contract_types" (
  "contract_type_id" uuid PRIMARY KEY,
  "tenant_id" uuid NOT NULL,
  "type" varchar NOT NULL,
  "description" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "software_catalog" (
  "software_catalog_id" uuid PRIMARY KEY,
  "vendor_id" uuid NOT NULL,
  "software_model_name" varchar NOT NULL,
  "software_version_number" varchar NOT NULL,
  "software_image" varchar NOT NULL,
  "software_release_date" date NOT NULL,
  "software_end_of_life" date,
  "software_end_of_support" date,
  "software_catalog_changed_at" timestamp NOT NULL,
  "software_catalog_created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "software_assets" (
  "software_asset_id" uuid PRIMARY KEY,
  "software_catalog_id" uuid NOT NULL,
  "hardware_asset_id" uuid,
  "software_asset_name" varchar NOT NULL,
  "software_asset_ip" varchar,
  "tenant_id" uuid NOT NULL,
  "site_id" uuid NOT NULL,
  "software_notes" varchar,
  "software_changed_at" timestamp NOT NULL,
  "software_created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "hardware_catalog" (
  "hardware_catalog_id" uuid PRIMARY KEY,
  "vendor_id" uuid NOT NULL,
  "hardware_model_name" varchar NOT NULL,
  "hardware_part_number" varchar NOT NULL,
  "hardware_image" varchar NOT NULL,
  "hardware_release_date" date NOT NULL,
  "hardware_end_of_life" date,
  "hardware_end_of_support" date,
  "hardware_catalog_changed_at" timestamp NOT NULL,
  "hardware_catalog_created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "hardware_assets" (
  "hardware_asset_id" uuid PRIMARY KEY,
  "hardware_catalog_id" uuid NOT NULL,
  "hardware_asset_name" varchar,
  "hardware_asset_ip" varchar,
  "hardware_asset_tag" varchar,
  "hardware_serial_no" varchar ,
  "tenant_id" uuid NOT NULL,
  "site_id" uuid,
  "hardware_notes" varchar,
  "hardware_changed_at" timestamp NOT NULL,
  "hardware_created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "hw_sub_components" (
  "hw_sub_component_id" uuid PRIMARY KEY,
  "hardware_asset_id" uuid NOT NULL,
  "amount" integer NOT NULL,
  "hw_part_make" varchar NOT NULL,
  "hw_part_model" varchar NOT NULL,
  "hw_part_number" varchar NOT NULL,
  "hw_serial_no" varchar,
  "hw_asset_tag" varchar,
  "hw_changed_at" timestamp NOT NULL,
  "hw_created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "spare_parts" (
  "spare_part_id" uuid PRIMARY KEY,
  "spare_amount" integer NOT NULL,
  "spare_part_make" varchar NOT NULL,
  "spare_part_model" varchar NOT NULL,
  "spare_part_number" varchar NOT NULL,
  "spare_serial_no" varchar,
  "spare_asset_tag" varchar,
  "spare_description" varchar,
  "spare_changed_at" timestamp NOT NULL,
  "spare_created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "sw_asset_contracts" (
  "sw_asset_contract_id" uuid PRIMARY KEY,
  "software_asset_id" uuid NOT NULL,
  "contract_id" uuid NOT NULL,
  "sw_created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "hw_asset_contracts" (
  "hw_asset_contract_id" uuid PRIMARY KEY,
  "hardware_asset_id" uuid NOT NULL,
  "contract_id" uuid NOT NULL,
  "hw_created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "vendors" (
  "vendor_id" uuid PRIMARY KEY,
  "vendor_name" varchar NOT NULL,
  "vendor_image" varchar NOT NULL,
  "vendor_created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "sites" (
  "site_id" uuid PRIMARY KEY,
  "tenant_id" uuid NOT NULL,
  "site_name" varchar NOT NULL,
  "site_address" varchar NOT NULL,
  "site_city" varchar NOT NULL,
  "site_postcode" integer NOT NULL,
  "site_country" varchar NOT NULL,
  "site_changed_at" timestamp NOT NULL,
  "site_created_at" timestamp DEFAULT (now())
);


ALTER TABLE "logs" DROP CONSTRAINT IF EXISTS "logs_tenant_id_fkey";
ALTER TABLE "logs" ADD CONSTRAINT "logs_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "logs" DROP CONSTRAINT IF EXISTS "logs_user_id_fkey";
ALTER TABLE "logs" ADD CONSTRAINT "logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "users" DROP CONSTRAINT IF EXISTS "users_role_id_fkey";
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles" ("role_id");

ALTER TABLE "users" DROP CONSTRAINT IF EXISTS "users_tenant_id_fkey";
ALTER TABLE "users" ADD CONSTRAINT "users_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "users" DROP CONSTRAINT IF EXISTS "users_site_id_fkey";
ALTER TABLE "users" ADD CONSTRAINT "users_site_id_fkey" FOREIGN KEY ("site_id") REFERENCES "sites" ("site_id");

ALTER TABLE "sites" DROP CONSTRAINT IF EXISTS "sites_tenant_id_fkey";
ALTER TABLE "sites" ADD CONSTRAINT "sites_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "alerts" DROP CONSTRAINT IF EXISTS "alerts_alert_type_id_fkey";
ALTER TABLE "alerts" ADD FOREIGN KEY ("alert_type_id") REFERENCES "alerts_type" ("alert_type_id");

ALTER TABLE "alerts" DROP CONSTRAINT IF EXISTS "alerts_tenant_id_fkey";
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "contracts" DROP CONSTRAINT IF EXISTS "contracts_contract_type_id_fkey";
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_contract_type_id_fkey" FOREIGN KEY ("contract_type_id") REFERENCES "contract_types" ("contract_type_id") ON DELETE CASCADE;

ALTER TABLE "contracts" DROP CONSTRAINT IF EXISTS "contracts_tenant_id_fkey";
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id") ON DELETE CASCADE;

ALTER TABLE "software_assets" DROP CONSTRAINT IF EXISTS "software_assets_software_catalog_id_fkey";
ALTER TABLE "software_assets" ADD CONSTRAINT "software_assets_software_catalog_id_fkey" FOREIGN KEY ("software_catalog_id") REFERENCES "software_catalog" ("software_catalog_id");

ALTER TABLE "software_assets" DROP CONSTRAINT IF EXISTS "software_assets_hardware_asset_id_fkey";
ALTER TABLE "software_assets" ADD CONSTRAINT "software_assets_hardware_asset_id_fkey" FOREIGN KEY ("hardware_asset_id") REFERENCES "hardware_assets" ("hardware_asset_id");

ALTER TABLE "software_assets" DROP CONSTRAINT IF EXISTS "software_assets_tenant_id_fkey";
ALTER TABLE "software_assets" ADD CONSTRAINT "software_assets_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "software_assets" DROP CONSTRAINT IF EXISTS "software_assets_site_id_fkey";
ALTER TABLE "software_assets" ADD CONSTRAINT "software_assets_site_id_fkey" FOREIGN KEY ("site_id") REFERENCES "sites" ("site_id");

ALTER TABLE "software_catalog" DROP CONSTRAINT IF EXISTS "software_catalog_vendor_id_fkey";
ALTER TABLE "software_catalog" ADD CONSTRAINT "software_catalog_vendor_id_fkey" FOREIGN KEY ("vendor_id") REFERENCES "vendors" ("vendor_id");

ALTER TABLE "hardware_assets" DROP CONSTRAINT IF EXISTS "hardware_assets_hardware_catalog_id_fkey";
ALTER TABLE "hardware_assets" ADD CONSTRAINT "hardware_assets_hardware_catalog_id_fkey" FOREIGN KEY ("hardware_catalog_id") REFERENCES "hardware_catalog" ("hardware_catalog_id");

ALTER TABLE "hardware_assets" DROP CONSTRAINT IF EXISTS "hardware_assets_tenant_id_fkey";
ALTER TABLE "hardware_assets" ADD CONSTRAINT "hardware_assets_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("tenant_id");

ALTER TABLE "hardware_assets" DROP CONSTRAINT IF EXISTS "hardware_assets_site_id_fkey";
ALTER TABLE "hardware_assets" ADD CONSTRAINT "hardware_assets_site_id_fkey" FOREIGN KEY ("site_id") REFERENCES "sites" ("site_id");

ALTER TABLE "hardware_catalog" DROP CONSTRAINT IF EXISTS "hardware_catalog_vendor_id_fkey";
ALTER TABLE "hardware_catalog" ADD CONSTRAINT "hardware_catalog_vendor_id_fkey" FOREIGN KEY ("vendor_id") REFERENCES "vendors" ("vendor_id");

ALTER TABLE "sw_asset_contracts" DROP CONSTRAINT IF EXISTS "sw_asset_contracts_contract_id_fkey";
ALTER TABLE "sw_asset_contracts" ADD CONSTRAINT "sw_asset_contracts_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "contracts" ("contract_id") ON DELETE CASCADE;

ALTER TABLE "sw_asset_contracts" DROP CONSTRAINT IF EXISTS "sw_asset_contracts_software_asset_id_fkey";
ALTER TABLE "sw_asset_contracts" ADD CONSTRAINT "sw_asset_contracts_software_asset_id_fkey" FOREIGN KEY ("software_asset_id") REFERENCES "software_assets" ("software_asset_id") ON DELETE CASCADE;

ALTER TABLE "hw_asset_contracts" DROP CONSTRAINT IF EXISTS "hw_asset_contracts_contract_id_fkey";
ALTER TABLE "hw_asset_contracts" ADD CONSTRAINT "hw_asset_contracts_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "contracts" ("contract_id") ON DELETE CASCADE;

ALTER TABLE "hw_asset_contracts" DROP CONSTRAINT IF EXISTS "hw_asset_contracts_hardware_asset_id_fkey";
ALTER TABLE "hw_asset_contracts" ADD CONSTRAINT "hw_asset_contracts_hardware_asset_id_fkey" FOREIGN KEY ("hardware_asset_id") REFERENCES "hardware_assets" ("hardware_asset_id") ON DELETE CASCADE;

ALTER TABLE "hw_sub_components" DROP CONSTRAINT IF EXISTS "hw_sub_components_hardware_asset_id_fkey";
ALTER TABLE "hw_sub_components" ADD CONSTRAINT "hw_sub_components_hardware_asset_id_fkey" FOREIGN KEY ("hardware_asset_id") REFERENCES "hardware_assets" ("hardware_asset_id") ON DELETE CASCADE;

`;
