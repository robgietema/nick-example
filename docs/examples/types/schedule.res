HTTP/1.1 200 OK
Content-Type: application/json

{
  "required": [
    "year"
  ],
  "fieldsets": [
    {
      "id": "default",
      "title": "Default",
      "fields": [
        "year"
      ]
    }
  ],
  "properties": {
    "year": {
      "type": "integer",
      "title": "Year",
      "description": "Year of this schedule."
    }
  },
  "title": "Schedule"
}