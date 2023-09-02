import * as db from '../utils/db/index';

// Define an array of SQL queries to create tables
const createTableQueries = [
    `
    CREATE TABLE IF NOT EXISTS "tenants" (
        "tenant_id" uuid PRIMARY KEY,
        "is_root" boolean,
        "tenant_name" varchar,
        "created_at" timestamp DEFAULT (now())
      );
    `,

    `
    CREATE TABLE IF NOT EXISTS "users" (
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
    `,

    `
    CREATE TABLE IF NOT EXISTS "main_navigation" (
        "main_navigation_id" uuid PRIMARY KEY,
        "main_nav_item" varchar
      );
    `,
    
    `
    CREATE TABLE IF NOT EXISTS "sub_navigation" (
        "sub_navigation_id" uuid PRIMARY KEY,
        "main_nav_id" uuid,
        "sub_nav_item" varchar
      );
    `,
    
    `
    CREATE TABLE IF NOT EXISTS "roles" (
        "role_id" uuid PRIMARY KEY,
        "role" varchar
      );
    `,

    `
    CREATE TABLE IF NOT EXISTS "alerts" (
        "alert_id" uuid PRIMARY KEY,
        "tenant_id" uuid,
        "alert_type_id" uuid,
        "alert_category_id" uuid,
        "asset_id" uuid,
        "title" array,
        "description" varchar,
        "dismissed" boolean,
        "created_at" timestamp DEFAULT (now())
      );
    `,

    `
    CREATE TABLE IF NOT EXISTS "alerts_type" (
        "alert_type_id" uuid PRIMARY KEY,
        "type" varchar
      );
    `,

    `
    CREATE TABLE IF NOT EXISTS "alerts_category" (
        "alert_category_id" uuid PRIMARY KEY,
        "category" varchar
      );
    `,

    `
    CREATE TABLE IF NOT EXISTS "logs" (
        "log_id" uuid PRIMARY KEY,
        "user_id" uuid,
        "tenant_id" uuid,
        "type" varchar,
        "title" varchar,
        "log_description" varchar,
        "created_at" timestamp DEFAULT (now())
      );
    `,

    `
    CREATE TABLE IF NOT EXISTS "contracts" (
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
    `,

    `
    CREATE TABLE IF NOT EXISTS "contract_types" (
        "contract_type_id" uuid PRIMARY KEY,
        "tenant_id" uuid,
        "type" varchar,
        "description" text,
        "created_at" timestamp DEFAULT (now())
      );
    `,

    `
    CREATE TABLE IF NOT EXISTS "software_list" (
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
    `,

    `
    CREATE TABLE IF NOT EXISTS "software_assets" (
        "software_asset_id" uuid PRIMARY KEY,
        "software_list_id" uuid,
        "hardware_id" uuid,
        "tenant_id" uuid,
        "site_id" uuid,
        "changed_at" timestamp,
        "created_at" timestamp DEFAULT (now())
      );
    `,

    `
    CREATE TABLE IF NOT EXISTS "hardware_list" (
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
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,

    `
    CREATE TABLE IF NOT EXISTS 
    `,
    

    // Add more CREATE TABLE queries as needed
  ];
  
  // Function to execute the CREATE TABLE queries sequentially
  const createTables = async () => {
    try {
      for (const query of createTableQueries) {
        await db.query(query);
        console.log('Table created successfully.');
      }
    } catch (error) {
      console.error('Error creating tables:', error);
    } finally {
      pool.end(); // Close the database connection when done
    }
  };
  
  createTables();