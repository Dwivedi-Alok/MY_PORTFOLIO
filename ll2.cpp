#include<bitsstdc++.h>
using namespace std ;
class node*{
    public:
     int data ;
     node* next ;
     node(int value){
        data = value;
        next=NULL;

     }
};
node*insert(node* head,int x){
    node*newNOde=new node(x);
    if(head==NULL || head->next==NULL){
       
        return head ;
    }
    node*mid=findmid(head);
    
    


}
void display(node*head){
    node*start=head ;
    while(start!=NULL){
        cout<<start->data<<" ";

    }
    cout<<"NULL":
}
int main (){
   node*head=NULL;
   int x;
   while(true){
    cin>>x;

    if(x==-1) break;
    head=insert(head,x);
   }
     display(head);
   sort(head);
  display(head);

}