# Database Normalization

## First Normal Form (1NF)

- **Given** columns and primary keys already defined in your table(s)


- Each of your columns and tables should contain one and only one value and have no repeating groups of similar data
  - Sometimes this is called "atomic" or "indivisible"

## Second Normal Form (2NF)

- **Given** tables are in 1NF


- Pertains to the relationship between your columns that are your keys and the columns that are not your keys
- Any non-key field should be dependent on the entire primary key
- If you are not using composite keys, you do not need to worry about 2NF
  - **Composite keys**, or compound keys, are a combination of two or more columns in a table that are used to uniquely identify each row in the table - uniqueness is only guaranteed when the columns are combined

## Third Normal Form (3NF)

- **Given** Database is in first and second normal forms

- No non-key field is dependent on any other non-key field
  - a field is the intersection of a row and a column