package com.example.appbasededados;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class MainActivity extends AppCompatActivity {

    private  DatabaseReference minhaReferencia = FirebaseDatabase.getInstance().getReference("produtos");
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        minhaReferencia.child("001").child("Nome").setValue("Coca-cola");
        minhaReferencia.child("001").child("Valor").setValue("R$ 14,00");
        minhaReferencia.child("002").child("Nome").setValue("Café");
        minhaReferencia.child("002").child("Valor").setValue("R$ 18,00");
        minhaReferencia.child("003").child("Nome").setValue("Chá");
        minhaReferencia.child("003").child("Valor").setValue("R$ 7,00");
    }
}