import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('portfolioViewsTable')
def lambda_handler(event, context):
    try:
        response = table.get_item(Key={
            'ID': 0
        })
        views = response['Item']['views']
        views = int(views)
        response = table.put_item(Item={
            'ID': 0,
            'views' : views+1
        })
        return {
            'statusCode': 200,
            'body': json.dumps(views+1)
        }
    except Exception as e:
        return{
            'statusCode': 500,
            'body': json.dumps("Unable to fetch views")
        }
